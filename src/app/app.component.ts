import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  className='hello';
  title = 'mycart';
  keyUp(event:any){
    console.log(event)
  }
  show(){
    console.log('hello');
    
  }
  hey(){
    console.log('o');
    
  }
}
