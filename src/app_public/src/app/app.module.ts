import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { NavComponent } from './components/nav/nav.component';
import { DomacaStranComponent } from './components/domaca-stran/domaca-stran.component';
import { PredlogiComponent } from './components/predlogi/predlogi.component';
import { ProfilComponent } from "./components/profil/profil.component";
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SeznamUporabnikovComponent } from './components/seznam-uporabnikov/seznam-uporabnikov.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import { NoviceComponent } from './components/novice/novice.component';
import { DodajSlikoComponent } from './components/dodaj-sliko/dodaj-sliko.component';
import { PredlogComponent } from './components/predlog/predlog.component';
import { ObcinaComponent } from './components/obcina/obcina.component';
import { NovicaComponent } from './components/novica/novica.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculateAgePipe } from './calculate-age.pipe';
import {SlobcinaPodatkiService} from "./services/slobcina-podatki.service";

@NgModule({
  declarations: [
    AppComponent,
    OgrodjeComponent,
    NavComponent,
    DomacaStranComponent,
    PredlogiComponent,
    ProfilComponent,
    RegistracijaComponent,
    PrijavaComponent,
    SeznamUporabnikovComponent,
    NotFoundComponent,
    DodajSlikoComponent,
    PredlogComponent,
    ObcinaComponent,
    NoviceComponent,
    NovicaComponent,
    CalculateAgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    SlobcinaPodatkiService
  ],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }
