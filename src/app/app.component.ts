import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){
  
  }
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
  constructor(private http:HttpClient){

  }
}
