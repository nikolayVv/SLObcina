import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {Router} from "@angular/router";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {Obcina} from "../../classes/obcina";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {ZgodovinaService} from "../../services/zgodovina.service";

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  public napakaNaObrazcu: string = '';
  public firstValue: string = 'First value';

  public novUporabnik = {
    id: '',
    ime: '',
    priimek: '',
    datumRojstva: '',
    email: '',
    vloga: 'obcan',
    geslo: '',
    ponoviGeslo: '',
    idObcina: '',
    mesto: '',
    naslov: '',
    telefonskaStevilka: ''
  };

  public obcine: Obcina[] = [];

  constructor(
    private usmerjevalnik: Router,
    private avtentikacijaStoritev: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private zgodovinaStoritev: ZgodovinaService
  ) { }

  private pridobiObcine(): void {
     this.slobcinaPodatkiStoritev
      .vrniObcine()
      .subscribe((najdeneObcine) => (this.obcine = najdeneObcine));
  }

  public posiljanjePodatkov(): void {
    this.napakaNaObrazcu = '';

    if (!this.novUporabnik.ime || !this.novUporabnik.priimek || !this.novUporabnik.email || !this.novUporabnik.geslo ||
        !this.novUporabnik.datumRojstva || !this.novUporabnik.ponoviGeslo || !this.novUporabnik.idObcina
    ) {
      this.napakaNaObrazcu = 'Polja z * so obvezna, prosim poskusite znova!';
    } else if (!this.jeDovoljStar(this.novUporabnik.datumRojstva)) {
      this.napakaNaObrazcu = 'Vpisana starost ne ustreza zahtevam (18+)!';
    } else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.novUporabnik.email)) {
      this.napakaNaObrazcu = 'Vnešen e-poštni naslov ni v veljavni obliki!';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.novUporabnik.geslo)) {
      this.napakaNaObrazcu = 'Geslo ne ustreza pogojem (vsaj 8 znakov, 1 številko, 1 veliko in 1 majhno črko)!';
    } else if (this.novUporabnik.geslo !== this.novUporabnik.ponoviGeslo) {
      this.napakaNaObrazcu = 'Vnešeno geslo ni enako potrditvenemu geslu!';
    } else {
      this.izvediRegistracijo();
    }
  }

  private jeDovoljStar(datumRojstva: string): boolean {
    var birthday: any = new Date(datumRojstva);
    var ageDifMs: any = Date.now() - birthday;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
  }

  private izvediRegistracijo(): void {
    this.avtentikacijaStoritev
      .registracija(this.novUporabnik)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        this.napakaNaObrazcu = napaka.toString();
        return throwError(() => napaka);
      })).subscribe(() => {
      this.usmerjevalnik.navigateByUrl(
        this.zgodovinaStoritev.vrniPredhodnjiUrlNaslovBrezPrijaveInRegistracije()
      );
    });
  }

  ngOnInit(): void {
    if (this.avtentikacijaStoritev.jePrijavljen()) {
      this.usmerjevalnik.navigateByUrl(
        this.zgodovinaStoritev.vrniPredhodnjiUrlNaslovBrezPrijaveInRegistracije()
      )
    } else {
      this.pridobiObcine();

    }
  }

}
