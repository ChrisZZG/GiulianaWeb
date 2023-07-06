import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './Componentes/hero/hero.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { BiographyComponent } from './Componentes/biography/biography.component';
import { WorksComponent } from './Componentes/works/works.component';
import { GalleryComponent } from './Componentes/gallery/gallery.component';
import { VideosComponent } from './Componentes/videos/videos.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { CopyrightComponent } from './Componentes/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,

    HeroComponent,
     NavComponent,
     BiographyComponent,
     WorksComponent,
     GalleryComponent,
     VideosComponent,
     ContactComponent,
     CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
