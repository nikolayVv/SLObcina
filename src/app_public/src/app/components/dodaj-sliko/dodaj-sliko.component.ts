import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {Uporabnik} from "../../classes/uporabnik";
import {SlobcinaPodatkiService} from "../../services/slobcina-podatki.service";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-dodaj-sliko',
  templateUrl: './dodaj-sliko.component.html',
  styleUrls: ['./dodaj-sliko.component.css']
})
export class DodajSlikoComponent implements OnInit {
  @Input() id: string | undefined | null;
  @Input() model: string | undefined ;
  @Input() hasImage: boolean | undefined;

  imageError: string | undefined | null;
  isImageSaved: boolean | undefined ;
  cardImageBase64: string | undefined | null;


  constructor(
    private slobcinaPodatkiStoritev: SlobcinaPodatkiService
  ) { }

  ngOnInit() {
  }


  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
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
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            this.cardImageBase64 = e.target.result;
            console.log(this.cardImageBase64);
            // this.shraniSliko();
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    this.cardImageBase64 = "";
    return false;
  }

  public shraniSliko() {
    if (!this.id || !this.cardImageBase64) {
      return
    }
    if (this.model == 'uporabnik') {
      if (this.hasImage) {
        this.slobcinaPodatkiStoritev
          .posodobiSlikoUporabnika(Number(this.id), this.cardImageBase64)
          .pipe(catchError((napaka: HttpErrorResponse) => {
            return throwError(() => napaka);
          }))
          .subscribe((odgovor: any) => {
            alert("Slika je bila posodobljena.");
          })
      } else {
        this.slobcinaPodatkiStoritev
          .dodajSlikoUporabnika(Number(this.id), this.cardImageBase64)
          .pipe(catchError((napaka: HttpErrorResponse) => {
            return throwError(() => napaka);
          }))
          .subscribe((odgovor: any) => {
            alert("Slika je bila posodobljena.");
          })
      }
    } else if (this.model == 'novica') {
      this.slobcinaPodatkiStoritev
        .dodajSlikoUporabnika(Number(this.id), this.cardImageBase64)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          return throwError(() => napaka);
        }))
        .subscribe((odgovor: any) => {
          alert("Slika je bila posodobljena.");
        })
    } else if (this.model == 'obcina') {
      console.log(this.id, this.cardImageBase64);
      this.slobcinaPodatkiStoritev
        .dodajSlikoObcina(Number(this.id), this.cardImageBase64)
        .pipe(catchError((napaka: HttpErrorResponse) => {
          console.log(napaka);
          return throwError(() => napaka);
        }))
        .subscribe((odgovor: any) => {
          alert("Slika je bila dodana.");
        })
    }

  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }

}
