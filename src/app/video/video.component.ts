import { Component, Input, OnInit } from '@angular/core';
import { MyserService } from '../myser.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: {
    url: string,
    videoLength: {
      minits: number,
      seconds: number
    }
    title: string,
    owner: string,
    ownerProfilePic: string,
    views: number,
    time: string

  } = {
      url: '',
      videoLength: {
        minits: 0,
        seconds: 0
      },
      title: '',
      owner: '',
      ownerProfilePic: '',
      views: 0,
      time: ''

    };
  data: any;
  imageUrl = '';
  constructor(private myserv: MyserService) {

  }
  ngOnInit() {
    this.myserv.newGif().subscribe(res => {
      this.data = res
      this.imageUrl = this.data.data.images.original.url;
      console.log(this.data.data.images.original.url);
    });
  }
}
