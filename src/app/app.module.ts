import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavLinkComponent } from './nav-link/nav-link.component';
@NgModule({
  declarations: [
    AppComponent,
    NavLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
