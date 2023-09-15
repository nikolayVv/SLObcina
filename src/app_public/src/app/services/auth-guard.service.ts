import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AvtentikacijaService } from "./avtentikacija.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AvtentikacijaService, public router: Router) {
  }
  canActivate(): boolean {
    if (!this.auth.jePrijavljen()) {
      this.router.navigate(["404"]);
      return false;
    }
    return true;
  }}
