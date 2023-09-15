import { Inject, Injectable } from '@angular/core';
import { SHRAMBA_BRSKALNIKA } from '../classes/shramba';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Uporabnik } from '../classes/uporabnik';
import { RezultatAvtentikacije } from '../classes/rezultat-avtentikacije';
import { SlobcinaPodatkiService } from '../services/slobcina-podatki.service';

@Injectable({
  providedIn: 'root'
})
export class AvtentikacijaService {
  constructor(
    @Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService
  ) {}

  public prijava(uporabnik: Uporabnik): Observable<RezultatAvtentikacije> {
    return this.slobcinaPodatkiStoritev.prijava(uporabnik).pipe(
      tap((rezultatAvtentikacije: RezultatAvtentikacije) => {
        this.shraniZeton(rezultatAvtentikacije['zeton']);
      })
    );
  }

  public registracija(uporabnik: Uporabnik): Observable<RezultatAvtentikacije> {
    return this.slobcinaPodatkiStoritev.registracija(uporabnik).pipe(
      tap((rezultatAvtentikacije: RezultatAvtentikacije) => {
        this.shraniZeton(rezultatAvtentikacije['zeton']);
      })
    );
  }

  public odjava(): void {
    this.shramba.removeItem('slobcina-zeton');
  }

  private b64Utf8(niz: string): string {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(niz), (znak: string) => {
          return '%' + ('00' + znak.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  public jePrijavljen(): boolean {
    const zeton: string | null = this.vrniZeton();
    if (zeton) {
      const koristnaVsebina = JSON.parse(this.b64Utf8(zeton.split('.')[1]));
      return koristnaVsebina.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public jeAdministrator(): boolean {
    const zeton: string | null = this.vrniZeton();
    if (zeton) {
      const koristnaVsebina = JSON.parse(this.b64Utf8(zeton.split('.')[1]));
      if (koristnaVsebina.exp > Date.now() / 1000) {
        return koristnaVsebina.vloga == 'administrator';
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public vrniTrenutnegaUporabnika(): Uporabnik | null {
    if (this.jePrijavljen()) {
      const zeton: string | null = this.vrniZeton();
      if (zeton) {
        const { id, email, ime, vloga } = JSON.parse(
          this.b64Utf8(zeton.split('.')[1])
        );
        return { id, email, ime, vloga } as Uporabnik;
      }
    }
    return null;
  }

  public vrniZeton(): string | null {
    return this.shramba.getItem('slobcina-zeton');
  }

  public shraniZeton(zeton: string): void {
    this.shramba.setItem('slobcina-zeton', zeton);
  }
}
