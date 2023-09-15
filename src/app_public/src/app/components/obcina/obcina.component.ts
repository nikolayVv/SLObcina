import { Component, OnInit } from '@angular/core';
import {ObcinaService} from "../../services/obcina.service";
import {Obcina, SlikaObcine} from "../../classes/obcina";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {Razred} from "../../classes/razred";
import {application} from "express";
import {catchError, retry} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Uporabnik} from "../../classes/uporabnik";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {Organizacija} from "../../classes/organizacija";
import {Novica} from "../../classes/novica";

@Component({
  selector: 'app-obcina',
  templateUrl: './obcina.component.html',
  styleUrls: ['./obcina.component.css']
})
export class ObcinaComponent implements OnInit {

  public organizacijaIme = '';
  public obcina: Obcina | null = null;
  public razredi: Razred[] = [];
  public idObcina: string | undefined;
  public slike: SlikaObcine[] | undefined;
  public uporabnik: Uporabnik | null = null;

  public noviPodatki = '';
  public organizacije: Organizacija[] = [];
  public slikeOrganizacij: { [key: number]: string } = {};

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left pt-0"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      400: {
        items: 2
      }
    },
    nav: true
  }

  constructor(
    private obcinaStoritev: ObcinaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private avtentikacijaStoritev: AvtentikacijaService
  ) { }

  public urediPodatkov() {
    if (this.noviPodatki !== this.obcina?.opis) {
      this.slobcinaPodatkiStoritev
        .urediObcinaID(this.obcina?.idObcina!!, this.noviPodatki)
        .subscribe(() => {
          this.ngOnInit();
        })
    }
  }

  public vrniOrganizacije(event: any) {
    console.log(event.target.value)
    this.slobcinaPodatkiStoritev
      .vrniOrganizacijeRazred(event.target.value)
      .subscribe((najdeneOrganizacije) => {
        this.organizacije = najdeneOrganizacije
        this.pridobiSlikoOrganizacije(najdeneOrganizacije);
      })
  }

  private pridobiSlikoOrganizacije(organizacije: Organizacija[]): void {
    for (let i = 0; i < organizacije.length; i++) {
      this.slobcinaPodatkiStoritev
        .vrniSlikoUporabnika(Number(organizacije[i].uporabnik))
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((slika) => {
          let id = organizacije[i].idorganizacija;
          this.slikeOrganizacij[id] = slika;
        })
    }
  }

  private pridobiObcino(id: number): void {
    this.slobcinaPodatkiStoritev
      .vrniObcinaID(id)
      .subscribe((obcina) => {
        this.obcina = obcina;
        this.idObcina = obcina.idObcina.toString();
        this.noviPodatki = obcina.opis
        this.pridobiSlikeObcine(obcina.idObcina);
      });
  }

  private pridobiSlikeObcine(id: number): void {
    this.slobcinaPodatkiStoritev
      .vrniSlikeObcina(id)
      .subscribe((slike) => {
        this.slike = slike;
      })
  }

  public izbrisiSlikoObcina(slika: SlikaObcine): void {
    this.slobcinaPodatkiStoritev
      .izbrisiSlikoObcina(slika._id)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        return throwError(() => napaka);
      }))
      .subscribe(() => {
        alert("Slika je bila uspešno izbrisana.");
      })
  }

  private pridobiRazredi(): void {
    this.slobcinaPodatkiStoritev
      .vrniRazredi()
      .subscribe((razredi) => (this.razredi = razredi));
  }

  ngOnInit(): void {
    this.uporabnik = this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();

    let obcinaId = this.obcinaStoritev.vrniObcinaId();
    this.pridobiObcino(obcinaId!!);
    this.pridobiRazredi();
  }

}
