import { Component, Input, OnInit} from '@angular/core';
import { PictureMe } from '../models/picture-me-model';
import { PictureMeService } from '../services/picture-me.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-picture-me',
  templateUrl: './picture-me.component.html',
  styleUrls: ['./picture-me.component.scss']
})

export class PictureMeComponent implements OnInit {

  @Input() pictureMe!: PictureMe;

  titleButton!: string;

  constructor(private pictureMeService: PictureMeService, private router: Router) { }

  ngOnInit(): void {
    this.titleButton = 'Picturelike !'
  }
  onAddPictureLike() {
    if(this.titleButton === 'Picturelike !') {
      this.pictureMeService.likePictureMeById(this.pictureMe.id, 'not like');
      this.titleButton = 'Oups un Picturelike !';
    } else {
      this.pictureMeService.likePictureMeById(this.pictureMe.id, 'like');
      this.titleButton = 'Picturelike !';
    }
  }
  onViewFaceSnap() {
    this.router.navigateByUrl("picturesMe/" + this.pictureMe.id)
  }

}
