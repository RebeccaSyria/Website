import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavLinkComponent } from './nav-link/nav-link.component';
import { CardComponent } from './card/card.component';
import {HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinkComponent,
    CardComponent,
    HamburgerButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
