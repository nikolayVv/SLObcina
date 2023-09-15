import { Component, OnInit } from '@angular/core';
import {Novica} from "../../classes/novica";
import { SlobcinaPodatkiService } from 'src/app/services/slobcina-podatki.service';
import {Router} from "@angular/router";
import { AvtentikacijaService } from 'src/app/services/avtentikacija.service';
import { Uporabnik } from 'src/app/classes/uporabnik';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import * as _ from "lodash";

@Component({
  selector: 'app-novice',
  templateUrl: './novice.component.html',
  styleUrls: ['./novice.component.css']
})
export class NoviceComponent implements OnInit {

  public novice: Novica[] = [];
  public slikeNovic: { [key: number]: string } = {};
  public noviceSize = 0;
  public isImageAdded: boolean | undefined ;
  public cardImageBase64: string | undefined | null;


  public novaNovica = {
    idnovica: 0,
    naslov: '',
    vsebina: '',
    datumobjave: '',
    uporabnik: 0,
  };

  public prijavljenUporabnik: Uporabnik | null = null;

  public napakaNaObrazcu = '';

  constructor(
    private usmerjevalnik: Router,
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService,
    private avtentikacijaService: AvtentikacijaService
  ) {}

  private pridobiNovice(): void {
    this.slobcinaPodatkiStoritev.vrniNovice().subscribe((najdeneNovice) => {
      this.novice = najdeneNovice;
      this.pridobiSlikoNovice(najdeneNovice);
    });
  }

  private pridobiSlikoNovice(novice: Novica[]): void {
    for (let i = 0; i < novice.length; i++) {
      this.slobcinaPodatkiStoritev
        .vrniSlikoNovicaID(novice[i].idnovica)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((slika) => {
          let id = novice[i].idnovica;
          this.slikeNovic[id] = slika.slika;
        })
    }
  }

  public dodajNovico(): void {
    this.napakaNaObrazcu = '';
    if (!this.novaNovica.naslov || !this.novaNovica.vsebina) {
      this.napakaNaObrazcu = 'Vsa polja so obvezna, prosim poskusite znova!';
    } else {
      this.slobcinaPodatkiStoritev
        .dodajNovico(this.novaNovica)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          this.napakaNaObrazcu = napaka.toString();
          return throwError(() => napaka);
        })).subscribe((odgovor: any) => {
          this.dodajSliko(odgovor.insertId);
          this.novaNovica.naslov = '';
          this.novaNovica.vsebina = '';
          this.ngOnInit();
      });
    }
  }

  private pridobiUporabnika(): void {
    this.prijavljenUporabnik = this.avtentikacijaService
      .vrniTrenutnegaUporabnika();
  }



  ngOnInit(): void {
    this.pridobiNovice()
    this.pridobiUporabnika()

    var temp = this.avtentikacijaService.vrniTrenutnegaUporabnika()?.id;
    if (temp !== undefined) {
      this.novaNovica.uporabnik = Number(temp);
    }
  }

  private dodajSliko(id: number): void {
    if (this.isImageAdded && this.cardImageBase64) {
      this.slobcinaPodatkiStoritev
        .dodajSlikoNovica(id, this.cardImageBase64)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((odgovor: any) => {
          alert("Slika je bila dodana.");
          this.ngOnInit();
        })
    } else {

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

          console.log(img_height, img_width);


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
