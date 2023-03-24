import { Component } from '@angular/core';
import { MyserService } from '../myser.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebaricons: string[] = this.myserv.sideBarIcons;
  sidebarData = [
    [
      {
        iconurl: this.sidebaricons[0],
        name: 'Home'
      },
      {
        iconurl:  this.sidebaricons[1],
        name: 'Shorts'
      },
      {
        iconurl:  this.sidebaricons[2],
        name: 'Subscription'
      },
    ],
    [
      {
        iconurl:  this.sidebaricons[3],
        name: 'Library'
      },
      {
        iconurl:  this.sidebaricons[4],
        name: 'History'
      },
      {
        iconurl:  this.sidebaricons[5],
        name: 'Your Videos'
      },
      {
        iconurl:  this.sidebaricons[6],
        name: 'Watch Later'
      },
      {
        iconurl:  this.sidebaricons[7],
        name: 'Your Clips'
      }
    ],
    [
      {
        iconurl:  this.sidebaricons[8],
        name: 'PewDiePie'
      },
      {
        iconurl:  this.sidebaricons[9],
        name: 'T-Series'
      },
      {
        iconurl:  this.sidebaricons[10],
        name: 'MrBeast'
      },
      {
        iconurl:  this.sidebaricons[11],
        name: 'Dude Perfect'
      },
      {
        iconurl:  this.sidebaricons[12],
        name: 'NigaHiga'
      },
      {
        iconurl:  this.sidebaricons[13],
        name: 'Zee Music Company'
      }
    ],
    [
      {
        iconurl:  this.sidebaricons[14],
        name: 'Trending'
      },
      {
        iconurl:  this.sidebaricons[15],
        name: 'Shopping'
      },
      {
        iconurl:  this.sidebaricons[16],
        name: 'Music'
      },
      {
        iconurl:  this.sidebaricons[17],
        name: 'Movies'
      },
      {
        iconurl:  this.sidebaricons[18],
        name: 'Live'
      },
      {
        iconurl:  this.sidebaricons[19],
        name: 'Gaming'
      },
      {
        iconurl:  this.sidebaricons[20],
        name: 'News'
      },
      {
        iconurl:  this.sidebaricons[21],
        name: 'Sports'
      },
      {
        iconurl:  this.sidebaricons[22],
        name: 'Learning'
      },
      {
        iconurl:  this.sidebaricons[23],
        name: 'Fashion'
      }
    ],
    [
      {
        iconurl:  this.sidebaricons[24],
        name: 'Youtube Premium'
      },
      {
        iconurl:  this.sidebaricons[25],
        name: 'Youtube Studio'
      },
      {
        iconurl:  this.sidebaricons[26],
        name: 'Youtube Music'
      },
      {
        iconurl:  this.sidebaricons[27],
        name: 'Youtube Kids'
      }

    ],
    [
      {
        iconurl:  this.sidebaricons[28],
        name: 'Settings'
      },
      {
        iconurl:  this.sidebaricons[29],
        name: 'Report History'
      },
      {
        iconurl:  this.sidebaricons[30],
        name: 'Help'
      },
      {
        iconurl:  this.sidebaricons[31],
        name: 'Send Feedback'
      }

    ],
  ]


  constructor(private myserv: MyserService) {

  }
}
