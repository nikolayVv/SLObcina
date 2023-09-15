import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { AvtentikacijaService } from 'src/app/services/avtentikacija.service';
import {Router} from "@angular/router";
import {catchError, switchMap} from 'rxjs/operators';
import {Novica} from "../../classes/novica";
import { SlobcinaPodatkiService } from 'src/app/services/slobcina-podatki.service';
import {Uporabnik} from "../../classes/uporabnik";
import * as _ from "lodash";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-novica',
  templateUrl: './novica.component.html',
  styleUrls: ['./novica.component.css']
})
export class NovicaComponent implements OnInit {
  public isImageAdded: boolean | undefined ;
  public cardImageBase64: string | undefined | null;

  constructor(
    private slobcinaPodatkiService: SlobcinaPodatkiService,
    private route: ActivatedRoute,
    private avtentikacijaStoritev: AvtentikacijaService,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private usmerjevalnik: Router
  ) {}

  public napakaNaObrazcu = '';
  public uporabnik: Uporabnik | null = null;
  public currentNovica: Novica = new Novica;
  public slikaNovice: string | undefined;
  public slikaDodana: boolean = false;
  public novaNovica = {
    idnovica: 0,
    vsebina: '',
    naslov: '',
    datumobjave: '',
    uporabnik: 0
  }

  public izbrisiNovico() {
    this.slobcinaPodatkiStoritev
      .izbrisiNovico(this.currentNovica.idnovica.toString())
      .subscribe(() => {
        this.usmerjevalnik.navigate(['/novice']);
      });
  }

  public dodajNovico() {
    this.napakaNaObrazcu = '';
    if (!this.novaNovica.naslov || !this.novaNovica.vsebina) {
      this.napakaNaObrazcu = 'Vsa polja so obvezna, prosim poskusite znova!';
    } else {
      this.slobcinaPodatkiStoritev
        .urediNovico(this.currentNovica.idnovica.toString(), this.novaNovica)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          this.napakaNaObrazcu = napaka.toString();
          return throwError(() => napaka);
        })).subscribe((odgovor: any) => {
        this.urediSliko(this.currentNovica.idnovica);
        this.ngOnInit();
      });
    }
  }

  private pridobiSlikoNovica(novica: Novica): void {
    this.slobcinaPodatkiStoritev
      .vrniSlikoNovicaID(novica.idnovica)
      .pipe(catchError((napaka: HttpErrorResponse) => {
        return throwError(() => napaka);
      }))
      .subscribe((slika) => {
        this.slikaNovice = slika.slika;
        this.slikaDodana = true;
      })
  }

  private urediSliko(id: number): void {
    if (this.slikaDodana && this.cardImageBase64) {
      this.slobcinaPodatkiStoritev
        .urediSlikoNovica(id, this.cardImageBase64)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((odgovor: any) => {
          alert("Slika je bila spremenjena.");
          this.ngOnInit();
        })
    } else if (this.cardImageBase64) {
      this.slobcinaPodatkiStoritev
        .dodajSlikoNovica(id, this.cardImageBase64)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((odgovor: any) => {
          alert("Slika je bila dodana.");
          this.ngOnInit();
        })
    }
  }

  ngOnInit(): void {
    this.uporabnik = this.avtentikacijaStoritev.vrniTrenutnegaUporabnika();

    if(this.route.paramMap.subscribe((params) => { return params.has('id') })) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          let novicaId: string = (params.get('novicaId') || '').toString();
          return this.slobcinaPodatkiService.vrniNovico(novicaId);
        })
      ).subscribe((novica: Novica) => {
        this.currentNovica = novica;
        this.novaNovica.naslov = novica.naslov
        this.novaNovica.vsebina = novica.vsebina
        this.pridobiSlikoNovica(novica);
      });
    }
  }

  fileChangeEvent(fileInput: any) {
    this.napakaNaObrazcu = '';
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.napakaNaObrazcu =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.napakaNaObrazcu = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        // @ts-ignore
        image.onload = rs => {
          // @ts-ignore
          const img_height = rs.currentTarget['height'];
          // @ts-ignore
          const img_width = rs.currentTarget['width'];



          if (img_height > max_height && img_width > max_width) {
            this.napakaNaObrazcu =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            this.cardImageBase64 = e.target.result;
            // console.log(this.cardImageBase64);
            // this.shraniSliko();
            this.isImageAdded = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    this.cardImageBase64 = "";
    return false;
  }
}
