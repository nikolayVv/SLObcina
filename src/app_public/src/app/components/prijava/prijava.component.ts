import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {ZgodovinaService} from "../../services/zgodovina.service";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  public napakaNaObrazcu: string = '';

  public prijavniPodatki = {
    id: '',
    ime: '',
    email: '',
    vloga: '',
    geslo: '',
  };

  public posiljanjePodatkov(): void {
    this.napakaNaObrazcu = '';
    if (!this.prijavniPodatki.email || !this.prijavniPodatki.geslo) {
      this.napakaNaObrazcu =
        'Zahtevani so vsi podatki, prosim poskusite znova!';
    } else {
      this.izvediPrijavo();
    }
  }

  constructor(
    private usmerjevalnik: Router,
    private avtentikacijaStoritev: AvtentikacijaService,
    private zgodovinaStoritev: ZgodovinaService
  ) { }

  private izvediPrijavo(): void {
    this.avtentikacijaStoritev
      .prijava(this.prijavniPodatki)
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
    }
  }

}
