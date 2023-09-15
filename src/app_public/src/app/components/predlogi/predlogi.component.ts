import { Component, OnInit } from '@angular/core';
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import { AvtentikacijaService } from 'src/app/services/avtentikacija.service';
import {Router} from "@angular/router";
import {Predlog, PredlogProjekta} from "../../classes/predlog";
import { Uporabnik } from 'src/app/classes/uporabnik';
import { Organizacija } from 'src/app/classes/organizacija';
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-predlogi',
  templateUrl: './predlogi.component.html',
  styleUrls: ['./predlogi.component.css']
})
export class PredlogiComponent implements OnInit {
  public napakaNaObrazcu: string = '';
  public uporabnik: Uporabnik | null = null;

  public predlogi: PredlogProjekta[] = [];
  private currFilter = "datum";

  public organizacije: Organizacija[] = [];

  public novPredlog: Predlog = {
    idPredlogProjekta: '',
    naslov: '',
    sporocilo: '',
    idOrganizacija: '',
    razred: '',
    jePotrjen: 0,
    datum: '',
    idUporabnik: ''
  };

  constructor(
    private usmerjevalnik: Router,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private avtentikacijaService: AvtentikacijaService
  ) { }

 public filtriraj(event: any): void {
    this.slobcinaPodatkiStoritev
      .vrniPredlogeFilter(event.target.value)
      .subscribe((najdenePredloge: PredlogProjekta[]) => {
        this.predlogi = najdenePredloge;
        this.razvrsti(this.currFilter);
      });
 }

 public razvrsti(filter: string): void {
    this.currFilter = filter;
    if (filter === "datum") {
      this.predlogi = this.predlogi.sort(
        (a, b) => new Date(b.predlog.datum).getTime() - new Date(a.predlog.datum).getTime(),
      )
    } else if (filter === "ocena") {
      this.predlogi = this.predlogi.sort(
        (a, b) => Number(b.ocena) - Number(a.ocena)
      )
    }
 }

 public dodajPredlog(): void {
    this.napakaNaObrazcu = '';
    if (!this.novPredlog.naslov || !this.novPredlog.sporocilo || !this.novPredlog.razred) {
      this.napakaNaObrazcu = 'Vsa polja so obvezna, prosim poskusite znova!';
    } else {
      this.novPredlog.idUporabnik = this.avtentikacijaService.vrniTrenutnegaUporabnika()?.id!!;
      //this.novPredlog.idOrganizacija =
      console.log(this.novPredlog);
      this.slobcinaPodatkiStoritev
        .dodajPredlog(this.novPredlog)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          this.napakaNaObrazcu = napaka.toString();
          return throwError(() => napaka);
        })).subscribe(() => {
          this.novPredlog.naslov = '';
          this.novPredlog.razred = '';
          this.novPredlog.sporocilo = '';
          this.ngOnInit()
        });
    }
 }

 counter(i: number) {
  i=Math.ceil(i);
  return new Array(i);
}

  ngOnInit(): void {
    this.uporabnik = this.avtentikacijaService.vrniTrenutnegaUporabnika();

    this.slobcinaPodatkiStoritev.vrniPredloge().subscribe((res) => {
      this.predlogi = res;
      this.razvrsti("datum");
    });

    var temp = this.avtentikacijaService.vrniTrenutnegaUporabnika()?.id;
    if (temp !== undefined) {
      this.novPredlog.idUporabnik = temp;
    }

    this.slobcinaPodatkiStoritev.vrniOrganizacije().subscribe((res) => {
      this.organizacije = res;
    });
  }



}
