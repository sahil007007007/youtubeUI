import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-data',
  templateUrl: './sidebar-data.component.html',
  styleUrls: ['./sidebar-data.component.scss']
})
export class SidebarDataComponent {
@Input()data:string[]=[];
}
