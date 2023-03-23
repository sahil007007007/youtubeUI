import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
sidebarData=[
  [
    "Home",
    "Shorts",
    "Subscription",
  ],
  [
    "Library",
    "History",
    "Your Videos",
    "Watch Later",
    "Your Clips",
  ],
  [
    "PewDiePie",
    "T-Series",
    "MrBeast",
    "Dude Perfect",
    "NigaHiga",
    "Zee Music Company",
  ],
]
}
