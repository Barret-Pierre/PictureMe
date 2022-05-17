import { Component, Input, OnInit} from '@angular/core';
import { PictureMe } from '../models/picture-me-model'

@Component({
  selector: 'app-picture-me',
  templateUrl: './picture-me.component.html',
  styleUrls: ['./picture-me.component.scss']
})
export class PictureMeComponent implements OnInit {

  @Input() pictureMe!: PictureMe;

  titleButton!: string;

  ngOnInit(): void {
    this.titleButton = 'Picturelike !'
  }
  onAddPictureLike() {
    if(this.titleButton === 'Picturelike !') {
      this.pictureMe.pictureLike++;
      this.titleButton = 'Oups un Picturelike !';
    } else {
      this.pictureMe.pictureLike--;
      this.titleButton = 'Picturelike !';
    }
  }

}
