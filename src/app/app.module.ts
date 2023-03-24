import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideosGridComponent } from './videos-grid/videos-grid.component';
import { SidebarDataComponent } from './sidebar-data/sidebar-data.component';
import { ListTagsComponent } from './list-tags/list-tags.component';
import { AllVideosComponent } from './all-videos/all-videos.component';
import { VideoComponent } from './video/video.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
     
      SidebarComponent,
      VideosGridComponent,
      SidebarDataComponent,
      ListTagsComponent,
      AllVideosComponent,
      VideoComponent,
 
   
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
