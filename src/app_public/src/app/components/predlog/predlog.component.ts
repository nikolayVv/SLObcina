import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {catchError, switchMap} from 'rxjs/operators';
import {Predlog, PredlogProjekta} from 'src/app/classes/predlog';
import { SlobcinaPodatkiService } from 'src/app/services/slobcina-podatki.service';
import {Uporabnik, UporabnikVsi} from "../../classes/uporabnik";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {ProfilComponent} from "../profil/profil.component";
import {Ocena} from "../../classes/ocena";
import {Organizacija} from "../../classes/organizacija";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-predlog',
  templateUrl: './predlog.component.html',
  styleUrls: ['./predlog.component.css']
})
export class PredlogComponent implements OnInit {
  public uporabnik: Uporabnik | null = null;
  public currOcena: Ocena[] = [];
  public novaOcena: Ocena = {
    idocena: 0,
    predlogProjekta: 0,
    uporabnik: 0,
    ocena: 0
  };
  public novRazred = '';

  public organizacije: Organizacija[] = [];
  public slikaUporabnika: string | undefined;
  public hasImage: boolean = false;


  constructor(
      private slobcinaPodatkiService: SlobcinaPodatkiService,
      private route: ActivatedRoute,
      private avtentikacijaStoritev: AvtentikacijaService,
      private usmerjevalnik: Router
    ) {}

  currentPredlog: PredlogProjekta = new PredlogProjekta();

  public aktiviraj() {
    this.slobcinaPodatkiService
      .aktivirajPredlog(this.currentPredlog.predlog.idPredlogProjekta)
      .subscribe(() => {
        this.ngOnInit()
      });
  }

  public izbrisi() {
    this.slobcinaPodatkiService
      .izbrisiPredlg(this.currentPredlog.predlog.idPredlogProjekta)
      .subscribe(() => {
        this.usmerjevalnik.navigate(['/predlogi']);
      });
  }

  public urediPredlog() {
    if (this.novRazred !== this.currentPredlog.predlog.razred) {
      this.slobcinaPodatkiService
        .urediPredlog(this.currentPredlog.predlog.idPredlogProjekta, this.novRazred)
        .subscribe(() => {
          this.ngOnInit();
        })
    }
  }

  private pridobiSlikoUporabnika(uporabnik: number) {
    this.slobcinaPodatkiService
        .vrniSlikoUporabnika(uporabnik)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe(slika => {
          this.slikaUporabnika = slika;
          this.hasImage = true;
  })
  }

  public posiljanjePodatkov() {
    if (this.currOcena[0]) {
      if (this.novaOcena.ocena.toString() !== this.currOcena[0].ocena.toString()) {
        this.slobcinaPodatkiService
          .urediOceno(this.currOcena[0].idocena, this.novaOcena.ocena)
          .subscribe(() => {
            this.ngOnInit()
          });
      }
    } else if (this.novaOcena.ocena !== 0){
      this.novaOcena.uporabnik = Number(this.uporabnik?.id!!)
      this.novaOcena.predlogProjekta = Number(this.currentPredlog.predlog.idPredlogProjekta)
      this.novaOcena.ocena = Number(this.novaOcena.ocena)

      this.slobcinaPodatkiService
        .dodajOceno(this.novaOcena)
        .subscribe(() => {
          this.ngOnInit()
        })
    }
  }

  ngOnInit(): void {
    this.uporabnik = this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();

    if(this.route.paramMap.subscribe((params) => { return params.has('id') })) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          let predlogId: string = (params.get('predlogId') || '').toString();
          return this.slobcinaPodatkiService.vrniPredlog(predlogId);
        })
      ).subscribe((predlog: PredlogProjekta) => {
        this.currentPredlog = predlog;
        this.novRazred = predlog.predlog.razred;
        this.pridobiSlikoUporabnika(Number(predlog.avtor.idUporabnik));
      });

      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          let predlogId: string = (params.get('predlogId') || '').toString();
          return this.slobcinaPodatkiService.vrniOceno(predlogId, this.uporabnik?.id!!)
        })
      ).subscribe((ocena: Ocena[]) => {
        this.currOcena = ocena;
        this.novaOcena.ocena = ocena[0] ? ocena[0].ocena : 0;
      });
    }

    this.slobcinaPodatkiService.vrniOrganizacije().subscribe((res) => {
      this.organizacije = res;
    });
  }

}
