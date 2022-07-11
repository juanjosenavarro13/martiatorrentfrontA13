import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { ArticulopageComponent } from './pages/articulopage/articulopage.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, CardComponent, ErrorComponent, ArticulopageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
