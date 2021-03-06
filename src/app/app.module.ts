import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { UrlSectionComponent } from './url-section/url-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GetStartedComponent,
    UrlSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
