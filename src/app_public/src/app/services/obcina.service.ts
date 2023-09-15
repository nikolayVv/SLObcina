import {Inject, Injectable} from '@angular/core';
import {SHRAMBA_BRSKALNIKA} from "../classes/shramba";
import {SlobcinaPodatkiService} from "./slobcina-podatki.service";
import {Uporabnik} from "../classes/uporabnik";
import {Observable} from "rxjs";
import {RezultatAvtentikacije} from "../classes/rezultat-avtentikacije";
import {tap} from "rxjs/operators";
import {Obcina} from "../classes/obcina";

@Injectable({
  providedIn: 'root'
})
export class ObcinaService {
  constructor(
    @Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService
  ) {}

  public vrniObcinaId(): number | null {
    return Number(this.shramba.getItem('obcina'));
  }

  public shraniObcina(idObcina: string): void {
    this.shramba.setItem('obcina', idObcina);
  }
}
