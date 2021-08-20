import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactercardComponent } from './charactercard/charactercard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesSectionComponent } from './favorites-section/favorites-section.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CharactercardComponent,
    HeaderComponent,
    FooterComponent,
    FavoritesSectionComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
