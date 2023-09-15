import { Component, OnInit } from '@angular/core';
import {Uporabnik, UporabnikVsi} from "../../classes/uporabnik";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-seznam-uporabnikov',
  templateUrl: './seznam-uporabnikov.component.html',
  styleUrls: ['./seznam-uporabnikov.component.css']
})
export class SeznamUporabnikovComponent implements OnInit {

  constructor(
    private avtentikacijaStoritev: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService
  ) { }

  public prijavljenUporabnik: Uporabnik | null = null;
  public seznamUporabnikov: UporabnikVsi[] | undefined ;

  public napakaNaObrazcu = "";

  public izbrisiUporabnika(id: number, userIndex: number) {
    this.slobcinaPodatkiStoritev
      .brisiUporabikaID(id)
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe((odgovor: any) => {
        this.seznamUporabnikov?.splice(userIndex, 1);
        alert("Uporabnik je bil uspešno izbrisan.");
      })
  }

  ngOnInit(): void {
    this.prijavljenUporabnik = this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();

    this.slobcinaPodatkiStoritev
      .vrniUporabnike()
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
      .subscribe(uporabniki => {
        this.seznamUporabnikov = uporabniki;
      })
  }

}
