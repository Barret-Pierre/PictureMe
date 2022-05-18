import { Component, OnInit } from '@angular/core';
import { PictureMe } from '../models/picture-me-model';
import { PictureMeService } from '../services/picture-me.service';



@Component({
  selector: 'app-picture-me-list',
  templateUrl: './picture-me-list.component.html',
  styleUrls: ['./picture-me-list.component.scss']
})
export class PictureMeListComponent implements OnInit {
  pictureMe!: PictureMe[];

  constructor(private pictureMeService: PictureMeService) { }

  ngOnInit(): void {
    this.pictureMe = this.pictureMeService.pictureMe;
  }
}
