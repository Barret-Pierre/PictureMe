import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictureMe } from '../models/picture-me-model';
import { PictureMeService } from '../services/picture-me.service';

@Component({
  selector: 'app-single-picture-me',
  templateUrl: './single-picture-me.component.html',
  styleUrls: ['./single-picture-me.component.scss']
})
export class SinglePictureMeComponent implements OnInit {

  pictureMe!: PictureMe;
  titleButton!: string;

  constructor(private pictureMeService: PictureMeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const pictureMeId = + this.route.snapshot.params['id'];
    this.titleButton = 'Picturelike !';
    this.pictureMe = this.pictureMeService.getOnePictureMeById(pictureMeId);
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


}
