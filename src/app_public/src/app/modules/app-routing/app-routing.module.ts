import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DomacaStranComponent } from '../../components/domaca-stran/domaca-stran.component';
import { PredlogiComponent } from '../../components/predlogi/predlogi.component';
import { PredlogComponent } from 'src/app/components/predlog/predlog.component';
import {ProfilComponent} from "../../components/profil/profil.component";
import {RegistracijaComponent} from "../../components/registracija/registracija.component";
import {PrijavaComponent} from "../../components/prijava/prijava.component";
import {SeznamUporabnikovComponent} from "../../components/seznam-uporabnikov/seznam-uporabnikov.component";
import {AuthGuardAdminService} from "../../services/auth-guard-admin.service";
import { NoviceComponent } from 'src/app/components/novice/novice.component';
import {NotFoundComponent} from "../../components/not-found/not-found.component";
import {AuthGuardService} from "../../services/auth-guard.service";
import { ObcinaComponent } from 'src/app/components/obcina/obcina.component';
import { NovicaComponent } from 'src/app/components/novica/novica.component';


const poti: Routes = [
  {path: '', component: DomacaStranComponent},
  {path: 'predlogi', component: PredlogiComponent},
  {path: 'predlog/:predlogId', component: PredlogComponent},
  {path: 'profil/:userId', component: ProfilComponent, canActivate: [AuthGuardService]},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'prijava', component: PrijavaComponent},
  {path: 'seznam', component: SeznamUporabnikovComponent, canActivate: [AuthGuardAdminService]},
  { path: "404", component: NotFoundComponent },
  {path: 'novice', component: NoviceComponent},
  {path: 'novice/:novicaId', component: NovicaComponent},
  { path: 'obcina', component: ObcinaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(poti)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
