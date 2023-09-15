import { Component, OnInit } from '@angular/core';
import {Uporabnik} from "../../classes/uporabnik";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {Novica} from "../../classes/novica";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import { registerLocaleData } from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Predlog, PredlogProjekta} from "../../classes/predlog";
registerLocaleData(localeSl);

@Component({
  selector: 'app-domaca-stran',
  templateUrl: './domaca-stran.component.html',
  styleUrls: ['./domaca-stran.component.css']
})
export class DomacaStranComponent implements OnInit {

  public uporabnik: Uporabnik | null = null;

  constructor(
    private avtentikacijaStoritev: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService
  ) { }

  public novice: Novica[] = [];
  public slikeNovic: { [key: number]: string } = {};
  public predloge: any[] = [];
  public slikePredlogov: { [key: string]: string } = {};

  public vsebina = {
     ekipa1: [
        {
          slika: "<img src=\"/assets/images/avatar1.png\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"150px\" height=\"150px\">",
          ime: "Klemen Jerman",
          opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          slika: "<img src=\"/assets/images/avatar5.png\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"150px\" height=\"150px\">",
          ime: "Miha Širovnik",
          opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          slika: "<img src=\"/assets/images/avatar3.png\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"150px\" height=\"150px\">",
          ime: "Andraž Zrimšek",
          opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
      ],
      ekipa2: [
        {
          slika: "<img src=\"/assets/images/avatar4.png\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"150px\" height=\"150px\">",
          ime: "Nikolay Vasilev",
          opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          slika: "<img src=\"/assets/images/avatar2.png\" class=\"rounded-circle\" alt=\"Cinque Terre\" width=\"150px\" height=\"150px\">",
          ime: "Eva Bizilj",
          opis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
      ]
  }

  private pridobiZadnjeNovice(): void {
    this.slobcinaPodatkiStoritev
      .vrniZadnjeNovice()
      .subscribe((najdeneNovice) => {
        this.novice = najdeneNovice;
        this.pridobiSlikoNovice(najdeneNovice);
      });
  }

  private pridobiSlikoNovice(novice: Novica[]): void {
    for (let i = 0; i < novice.length; i++) {
      this.slobcinaPodatkiStoritev
        .vrniSlikoNovicaID(novice[i].idnovica)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((slika) => {
          let id = novice[i].idnovica;
          this.slikeNovic[id] = slika.slika;
        })
    }
  }

  private pridobiNajboljPredlogi(): void {
    this.slobcinaPodatkiStoritev
      .vrniNajboljPredlogi()
      .subscribe((najdenePredloge) => {
        this.predloge = najdenePredloge;
        this.pridobiSlikoPredlogi(najdenePredloge);
      });
  }

  private pridobiSlikoPredlogi(predlogi: PredlogProjekta[]): void {
    for (let i = 0; i < predlogi.length; i++) {
      this.slobcinaPodatkiStoritev
        .vrniSlikoUporabnika(Number(predlogi[i].avtor.idUporabnik))
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((slika) => {
          let id = predlogi[i].predlog.idPredlogProjekta;
          this.slikePredlogov[id] = slika;
        })
    }
  }

  ngOnInit(): void {
      if (this.avtentikacijaStoritev.jePrijavljen()) {
        this.uporabnik = this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();
      }
      this.pridobiZadnjeNovice();
      this.pridobiNajboljPredlogi();
  }

}
