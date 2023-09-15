import { Component, OnInit, Input } from '@angular/core';
import {Uporabnik} from "../../classes/uporabnik";
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {Router} from "@angular/router";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {Obcina} from "../../classes/obcina";
import {ObcinaService} from "../../services/obcina.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() uporabnik: Uporabnik | undefined | null;
  @Input() jePrijavljen: boolean | undefined;

  public obcine: Obcina[] = [];
  public trenutnaObcina: Obcina | null = null;

  constructor(
    private usmerjevalnik: Router,
    private avtentikacija: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private obcinaStoritev: ObcinaService
  ) { }

  private pridobiObcine(): void {
    this.slobcinaPodatkiStoritev
      .vrniObcine()
      .subscribe((najdeneObcine) => {
        this.obcine = najdeneObcine
        let trenutnaObcinaId = this.obcinaStoritev.vrniObcinaId();
        console.log(trenutnaObcinaId)
        if (!trenutnaObcinaId) {
          this.trenutnaObcina = this.obcine[0];
          this.obcinaStoritev.shraniObcina(this.obcine[0].idObcina.toString());
        } else {
          for (let i = 0; i < this.obcine.length; i++) {
            if (this.obcine[i].idObcina === trenutnaObcinaId) {
              this.trenutnaObcina = this.obcine[i];
              break;
            }
          }
        }
      });
  }

  public prilagodiObcino(obcina: Obcina): void {
    this.obcinaStoritev.shraniObcina(obcina.idObcina.toString());
    this.trenutnaObcina = obcina;
    this.ngOnInit();
  }

  public vrniUrl(): string {
    return this.usmerjevalnik.routerState.snapshot.url;
  }

  public odjava(): void {
    this.avtentikacija.odjava();
    this.ngOnInit();
    this.usmerjevalnik.navigate(['']);
  }

  ngOnInit(): void {
    this.pridobiObcine()
  }

}
