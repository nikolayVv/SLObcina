import { Component, OnInit } from '@angular/core';
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import { ZgodovinaService} from "../../services/zgodovina.service";
import {Uporabnik, UporabnikVsi} from '../../classes/uporabnik';
import {Observable, switchMap, throwError} from "rxjs";
import {Obcina} from "../../classes/obcina";
import {catchError, retry} from "rxjs/operators";
import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Organizacija} from "../../classes/organizacija";
registerLocaleData(localeSl);

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(
    private avtentikacijaStoritev: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private zgodovinaStoritev: ZgodovinaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public prijavljenUporabnik: Uporabnik | null = null;
  public profileID: string | undefined;
  public profilePic: string | undefined;
  public hasImage: boolean = false;

  public organizacija: Organizacija[] = [];
  public uporabnik: UporabnikVsi = new UporabnikVsi()
  public obcine: Obcina[] = [];

  private pridobiObcine(): void {
    this.slobcinaPodatkiStoritev
      .vrniObcine()
      .subscribe((najdeneObcine) => (this.obcine = najdeneObcine));
  }


  public novUporabnik = {
    idUporabnik: 0,
    ime: "",
    priimek: "",
    email: "",
    telefonskaStevilka: "",
    naslov: "",
    mesto: "",
    imeObcina: "",
    obcina: 0,
    opis: "",
    registriranOdString: "",
    stPredlogov: 0,
    vloga: "obcan",
    staroGeslo: "",
    novoGeslo: "",
    rojstniDatum: new Date(Date.now()),
    registriranOd: new Date(Date.now()),
  }

  public napakaNaObrazcu = "";

  private pridobiUporabnika(): void {
    this.prijavljenUporabnik = this.avtentikacijaStoritev
      .vrniTrenutnegaUporabnika();
  }

  private posodobiPodatke(): void {
    this.slobcinaPodatkiStoritev
      .posodobiUporabnika(this.novUporabnik)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        this.napakaNaObrazcu = napaka.toString();
        return throwError(() => napaka);
      }))
      .subscribe((odgovor: any) => {
        this.ngOnInit()
        alert("Podatki so bili posodobljeni");
      })
  }

  public preveriPodatke(): void {
    this.napakaNaObrazcu = "";
    if (this.novUporabnik.staroGeslo || this.novUporabnik.novoGeslo) {
      if (this.novUporabnik.novoGeslo && this.novUporabnik.staroGeslo) {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.novUporabnik.novoGeslo)) {
          this.napakaNaObrazcu = 'Geslo ne ustreza pogojem (vsaj 8 znakov, 1 številko, 1 veliko in 1 majhno črko)!';
        } else {
          this.posodobiPodatke();
        }
      } else {
        this.napakaNaObrazcu = 'Potrebno je staro in novo geslo.'
      }
    }
    else {
      this.posodobiPodatke();
    }
  }

  private pridobiImeObcine(id: number): void {
    this.slobcinaPodatkiStoritev
      .vrniObcinaID(id)
      .subscribe(obcina => {
        this.novUporabnik.imeObcina = obcina.naslov;
      });
  }

  public izbrisiUporabnika(id: number) {
    this.slobcinaPodatkiStoritev
      .brisiUporabikaID(id)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        alert("Uporabnik je bil uspešno izbrisan.");
        this.router.navigate(['']);
      })
  }

  private pridobiSliko(idUporabnik: number) {
    this.slobcinaPodatkiStoritev
      .vrniSlikoUporabnika(idUporabnik)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        return throwError(() => napaka);
      }))
      .subscribe(slika => {
        console.log(slika);
        this.profilePic = slika;
        this.hasImage = true;
      })
  }


  ngOnInit(): void {
    this.pridobiObcine();
    this.pridobiUporabnika();
    if (!this.prijavljenUporabnik) {
      return;
    }
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let userId: string = (params.get("userId") || "").toString();
          this.profileID = userId;
          return this.slobcinaPodatkiStoritev
            .vrniUporabnikaID(userId);
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe(uporabnik => {
        this.uporabnik = uporabnik
        this.novUporabnik.idUporabnik = uporabnik.idUporabnik;
        this.novUporabnik.ime = uporabnik.ime;
        this.novUporabnik.priimek = uporabnik.priimek;
        this.novUporabnik.email = uporabnik.email;
        this.novUporabnik.telefonskaStevilka = uporabnik.telefonskaStevilka;
        this.novUporabnik.rojstniDatum = uporabnik.rojstniDatum;
        this.novUporabnik.naslov = uporabnik.naslov;
        this.novUporabnik.mesto = uporabnik.mesto;
        this.novUporabnik.obcina = uporabnik.obcina;
        this.novUporabnik.naslov = uporabnik.naslov;
        this.novUporabnik.opis = uporabnik.opis;
        this.novUporabnik.registriranOdString = uporabnik.registriranOd.toString();
        this.novUporabnik.registriranOd = uporabnik.registriranOd;
        this.novUporabnik.rojstniDatum = uporabnik.rojstniDatum;
        this.novUporabnik.vloga = uporabnik.vloga;
        this.novUporabnik.stPredlogov = uporabnik.stPredlogov;
        this.pridobiImeObcine(uporabnik.obcina);
        this.pridobiSliko(uporabnik.idUporabnik);
      });

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let userId: string = (params.get("userId") || "").toString();
          this.profileID = userId;
          return this.slobcinaPodatkiStoritev
            .vrniOrganizacijaUporabnik(this.profileID);
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe(organizacija => (this.organizacija = organizacija));
  }


}


