import { Component } from '@angular/core';
import { MyserService } from '../myser.service';

@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent {
  thumbnailUrl: string[] = [];
  videoInfo: {
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

  }[] = []
  data:any;
  imageUrl:string='';
  ngOnInit() {
    this.myserv.newGif().subscribe(res=>{
      this.data=res
      this.imageUrl=this.data.data.images.original.url;
      console.log(this.data.data.images.original.url);
    });
    for (let i = 0; i < 200; i++) {
      let randomid = Math.floor(Math.random() * 1000);
      let url = `https://picsum.photos/id/${randomid}/500/300`;
      let profileurl = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/300`;
      let videoInfoObject = {
        url: url,
        videoLength: {
          minits: Math.floor(Math.random() * 60),
          seconds: Math.floor(Math.random() * 60)
        },
        title: this.myserv.videoTitles[Math.floor(Math.random() * 50)],
        owner: this.myserv.youtuberNames[Math.floor(Math.random() * 50)],
        ownerProfilePic: profileurl,
        views:  Math.floor(Math.random() * 10000000),
        time: this.myserv.generateRandomDate()
      }
      this.videoInfo.push(videoInfoObject)
    }
  }
  constructor(private myserv:MyserService){

  }
}
