import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-data',
  templateUrl: './sidebar-data.component.html',
  styleUrls: ['./sidebar-data.component.scss']
})
export class SidebarDataComponent {
  @Input() data: {
    iconurl: string,
    name: string,
  }[] = [];
  ngOnInit(){
    if(this.data[0].name==="Home"){

    }
  }
}
