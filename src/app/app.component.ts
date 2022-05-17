import { Component, OnInit } from '@angular/core';
import { PictureMe } from './models/picture-me-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // myFirstPictureMe!: PictureMe;
  // mySecondPictureMe!: PictureMe;
  // myThirdPictureMe!: PictureMe;
  pictureMe!: PictureMe[]

  ngOnInit(): void {
    this.pictureMe = [
      {
        title: "Archibald",
        description: "Mon meilleur ami depuis tout petit",
        createdDate: new Date(),
        pictureLike: 250,
        url: "/assets/upload/pictures/default.jpg",
        location: "Orléans",
      },
      {
        title: "Donovan",
        description: "Mon Poisson rouge",
        createdDate: new Date(),
        pictureLike: 46,
        url: "/assets/upload/pictures/default.jpg",
      },
      {
        title: "Robin",
        description: "Le petit copain de Bruce",
        createdDate: new Date(),
        pictureLike: 160,
        url: "/assets/upload/pictures/default.jpg",
      },
    ]
  }
}
