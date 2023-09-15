import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RezultatAvtentikacije } from '../classes/rezultat-avtentikacije';
import {Uporabnik, UporabnikVsi} from '../classes/uporabnik';
import { SlikaObcine } from "../classes/obcina";

import {Razred} from '../classes/razred'
import { environment } from '../../environments/environment';
import {Obcina} from "../classes/obcina";
import { Novica } from "../classes/novica";
import {Predlog, PredlogProjekta} from '../classes/predlog';
import { Organizacija } from '../classes/organizacija';
import {Ocena} from "../classes/ocena";

@Injectable({
  providedIn: 'root'
})
export class SlobcinaPodatkiService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public vrniObcine(): Observable<Obcina[]> {
    const url: string = `${this.apiUrl}/obcina`;
    return this.http
      .get<Obcina[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniObcinaID(id: number): Observable<Obcina> {
    const url: string = `${this.apiUrl}/obcina/${id}`;
    return this.http
      .get<Obcina>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediObcinaID(id: number, podatki: string) {
    const url: string = `${this.apiUrl}/obcina/${id}`;
    return this.http
      .put(url, { opis: podatki })
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniOrganizacijeRazred(razred: string): Observable<Organizacija[]> {
    const url: string = `${this.apiUrl}/organizacije/${razred}/filter`;
    return this.http
      .get<Organizacija[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniZadnjeNovice(): Observable<Novica[]> {
    const url: string = `${this.apiUrl}/novice/filter`;
    return this.http
      .get<Novica[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniNajboljPredlogi(): Observable<any[]> {
    const url: string = `${this.apiUrl}/predlogProjekta/filter`;
    return this.http
      .get<any[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniUporabnike() : Observable<UporabnikVsi[]> {
    const url: string = `${this.apiUrl}/uporabnik`;
    return this.http
      .get<UporabnikVsi[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniUporabnikaID(idUporabnika: string): Observable<UporabnikVsi> {
    const url: string = `${this.apiUrl}/uporabnik/${idUporabnika}`;
    return this.http
      .get<UporabnikVsi>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public brisiUporabikaID(idUporabnika: number) {
    const url: string = `${this.apiUrl}/uporabnik/${idUporabnika}`
    return this.http
      .delete(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public dodajSlikoUporabnika(idUporabnika: number, slika: string) {
    const url: string = `${this.apiUrl}/uporabnik/img`
    const podatki = {
      idUporabnik: idUporabnika,
      slika: slika
    }
    return this.http
      .post(url, podatki)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public posodobiSlikoUporabnika(idUporabnika: number, slika: string) {
    const url: string = `${this.apiUrl}/uporabnik/img/${idUporabnika}`
    const podatki = {
      slika: slika
    }
    return this.http
      .put(url, podatki)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniSlikoUporabnika(idUporabnika: number): Observable<string> {
    const url: string = `${this.apiUrl}/uporabnik/img/${idUporabnika}`
    return this.http
      .get<string>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public dodajSlikoObcina(idObcina: number, slika: string) {
    const url: string = `${this.apiUrl}/obcina/img/${idObcina}`
    const podatki = {
      // idObcina: idObcina,
      slika: slika
    }
    return this.http
      .post(url, podatki)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniSlikeObcina(idObcine: number): Observable<SlikaObcine[]> {
    const url: string = `${this.apiUrl}/obcina/img/${idObcine}`
    return this.http
      .get<SlikaObcine[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiSlikoObcina(idSlike: string) {
    const url: string = `${this.apiUrl}/obcina/img/${idSlike}`
    return this.http
      .delete(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public prijava(uporabnik: Uporabnik): Observable<RezultatAvtentikacije> {
    return this.avtentikacija('prijava', uporabnik);
  }

  public registracija(uporabnik: Uporabnik): Observable<RezultatAvtentikacije> {
    return this.avtentikacija('registracija', uporabnik);
  }

  private avtentikacija(urlNaslov: string, uporabnik: Uporabnik): Observable<RezultatAvtentikacije> {
    const url: string = `${this.apiUrl}/${urlNaslov}`;
    return this.http
      .post<RezultatAvtentikacije>(url, uporabnik)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  private obdelajNapako(napaka: HttpErrorResponse) {
    return throwError(
      () => napaka.error.sporocilo || napaka.statusText
    );
  }

  public posodobiUporabnika(uporabnik: UporabnikVsi) {
    const url: string = `${this.apiUrl}/uporabnik/${uporabnik.idUporabnik}`;
    console.log(uporabnik);
    return this.http
      .put(url, uporabnik)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }


  //PREDLOGI
  public dodajPredlog(predlog: Predlog) {
    const url: string = `${this.apiUrl}/predlogProjekta`;
    return this.http
      .post(url, predlog)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniPredloge(): Observable<PredlogProjekta[]> {
    const url: string = `${this.apiUrl}/predlogProjekta`;
    return this.http
      .get<PredlogProjekta[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniPredlogeFilter(ime: string): Observable<PredlogProjekta[]> {
    ime = ime ? ime : 'vsi';
    const url: string = `${this.apiUrl}/predlogProjekta/${ime}/filter`;
    return this.http
      .get<PredlogProjekta[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniPredlog(i: string): Observable<PredlogProjekta> {
    const url: string = `${this.apiUrl}/predlogProjekta/${i}`;
    return this.http
      .get<PredlogProjekta>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public aktivirajPredlog(idPredlogProjekta: string) {
    const url: string = `${this.apiUrl}/predlogProjekta/${idPredlogProjekta}`;
    return this.http
      .put(url, { jePotrjen: 1 })
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediPredlog(idPredlogProjekta: string, razred: string) {
    const url: string = `${this.apiUrl}/predlogProjekta/${idPredlogProjekta}/uredi`;
    return this.http
      .put(url, { razred: razred })
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiPredlg(idPredlogProjekta: string) {
    const url: string = `${this.apiUrl}/predlogProjekta/${idPredlogProjekta}`;
    return this.http
      .delete(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniOceno(idPredlogProjekta: string, idUporabnik: string): Observable<Ocena[]> {
    const url: string = `${this.apiUrl}/predlogProjekta/${idPredlogProjekta}/ocene/${idUporabnik}`;
    return this.http
      .get<Ocena[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public dodajOceno(ocena: Ocena) {
    const url: string = `${this.apiUrl}/ocene`;
    return this.http
      .post(url, ocena)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediOceno(idOcena: number, ocena: number) {
    const url: string = `${this.apiUrl}/ocene/${idOcena}`;
    return this.http
      .put(url, { ocena: ocena })
      .pipe(retry(1), catchError(this.obdelajNapako));
  }


  //ORGANIZACIJE
  public vrniOrganizacije(): Observable<Organizacija[]> {
    const url: string = `${this.apiUrl}/organizacije`;
    return this.http
      .get<Organizacija[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniOrganizacijaUporabnik(idUporabnika: string): Observable<Organizacija[]> {
    const url: string = `${this.apiUrl}/organizacije/${idUporabnika}`;
    return this.http
      .get<Organizacija[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  //Novice
  public dodajNovico(novica: Novica) {
    const url: string = `${this.apiUrl}/novice`;
    return this.http.post(url, novica).pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediNovico(idNovica: string, novica: Novica) {
    const url: string = `${this.apiUrl}/novice/${idNovica}`;
    return this.http
      .put(url, novica)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public izbrisiNovico(idNovica: string) {
    const url: string = `${this.apiUrl}/novice/${idNovica}`;
    return this.http
      .delete(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniNovice(): Observable<Novica[]> {
    const url: string = `${this.apiUrl}/novice`;
    return this.http
      .get<Novica[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniNovico(id: string): Observable<Novica> {
    const url: string = `${this.apiUrl}/novice/${id}`;
    return this.http
      .get<Novica>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniRazredi(): Observable<Razred[]> {
    const url: string = `${this.apiUrl}/razredi`;
    return this.http
      .get<Razred[]>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public dodajSlikoNovica(idNovica: number, slika: string) {
    const url: string = `${this.apiUrl}/novice/img/${idNovica}`
    const podatki = {
      slika: slika
    }
    return this.http
      .post(url, podatki)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public urediSlikoNovica(idNovica: number, slika: string) {
    const url: string = `${this.apiUrl}/novice/img/${idNovica}`
    const podatki = {
      slika: slika
    }
    return this.http
      .put(url, podatki)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }

  public vrniSlikoNovicaID(idNovice: number): Observable<SlikaObcine> {
    const url: string = `${this.apiUrl}/novice/img/${idNovice}`
    return this.http
      .get<SlikaObcine>(url)
      .pipe(retry(1), catchError(this.obdelajNapako));
  }
}

