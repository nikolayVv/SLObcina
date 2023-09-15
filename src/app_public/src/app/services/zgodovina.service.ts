import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ZgodovinaService {
  private urlNaslovi: string[] = [];

  constructor(private usmerjevalnik: Router) {
    this.usmerjevalnik.events.subscribe((dogodekUsmerjanja) => {
      if (dogodekUsmerjanja instanceof NavigationEnd)
        this.urlNaslovi.push(dogodekUsmerjanja.urlAfterRedirects);
    });
  }

  public vrniPredhodnjiUrlNaslov(): string {
    this.urlNaslovi.pop();
    if (this.urlNaslovi.length > 0) return this.urlNaslovi.slice(-1).toString();
    else return '/';
  }

  public vrniPredhodnjiUrlNaslovBrezPrijaveInRegistracije(): string {
    const izloci: string[] = ['/registracija', '/prijava'];
    this.urlNaslovi.pop();
    const filtrirano = this.urlNaslovi.filter((url) => !izloci.includes(url));
    if (filtrirano.length > 0) return filtrirano.slice(-1).toString();
    else return '/';
  }
}
