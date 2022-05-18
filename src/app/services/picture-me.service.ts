import { Injectable } from '@angular/core';
import { PictureMe } from '../models/picture-me-model'


@Injectable({
  providedIn: 'root'
})
export class PictureMeService {
  pictureMe: PictureMe[] = [
    {
      id: 1,
      title: "Archibald",
      description: "Mon meilleur ami depuis tout petit",
      createdDate: new Date(),
      pictureLike: 250,
      url: "/assets/upload/pictures/default.jpg",
      location: "Orléans",
    },
    {
      id: 2,
      title: "Donovan",
      description: "Mon Poisson rouge",
      createdDate: new Date(),
      pictureLike: 46,
      url: "/assets/upload/pictures/default.jpg",
    },
    {
      id: 3,
      title: "Robin",
      description: "Le petit copain de Bruce",
      createdDate: new Date(),
      pictureLike: 160,
      url: "/assets/upload/pictures/default.jpg",
    },
  ]

  getAllPictureMe(): PictureMe[] {
    return this.pictureMe;
  }

  getOnePictureMeById(pictureMeId : number): PictureMe {
    const pictureMe = this.pictureMe.find(pictureMe => pictureMe.id === pictureMeId);
    if(pictureMe) {
      return pictureMe;
    } else {
      throw new Error('Picture not found');
    }
  }

  likePictureMeById(pictureMeId: number, pictureMeState: 'like' | 'not like') : void {
    let pictureMe = this.getOnePictureMeById(pictureMeId);
    pictureMeState === 'like' ? pictureMe.pictureLike-- : pictureMe.pictureLike++;
  }
}