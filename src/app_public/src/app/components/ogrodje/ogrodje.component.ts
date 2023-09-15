import { Component, OnInit } from '@angular/core';
import {AvtentikacijaService} from "../../services/avtentikacija.service";
import {Uporabnik} from "../../classes/uporabnik";
import {ZgodovinaService} from "../../services/zgodovina.service";

@Component({
  selector: 'app-ogrodje',
  templateUrl: './ogrodje.component.html',
  styleUrls: ['./ogrodje.component.css']
})
export class OgrodjeComponent implements OnInit {

  constructor(
    private avtentikacijaStoritev: AvtentikacijaService,
    private zgodovinaStoritev: ZgodovinaService
  ) { }

  public jePrijavljen(): boolean {
    return this.avtentikacijaStoritev.jePrijavljen();
  }

  public vrniUporabnik(): Uporabnik | null {
    return this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();
  }

  ngOnInit(): void {
  }

}
