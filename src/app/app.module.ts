import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureMeComponent } from './picture-me/picture-me.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { PictureMeListComponent } from './picture-me-list/picture-me-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app_routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePictureMeComponent } from './single-picture-me/single-picture-me.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureMeComponent,
    PictureMeListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePictureMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
