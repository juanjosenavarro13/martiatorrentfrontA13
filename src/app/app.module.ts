import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { ArticulopageComponent } from './pages/articulopage/articulopage.component';
import { CategoriapageComponent } from './pages/categoriapage/categoriapage.component';
import { Top10Component } from './components/top10/top10.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuusuarioComponent } from './components/menuusuario/menuusuario.component';
import { RegistropageComponent } from './pages/registropage/registropage.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Top10Component,
    HeaderComponent,
    HomepageComponent,
    ArticulopageComponent,
    CategoriapageComponent,
    ErrorComponent,
    MenuusuarioComponent,
    RegistropageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
