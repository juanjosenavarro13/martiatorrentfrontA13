import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
