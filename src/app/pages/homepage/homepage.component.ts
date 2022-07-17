import { Component, OnInit, Output } from '@angular/core';
import { articuloModel, articuloPaginateModel } from 'src/app/Models/cardModel';
import { enlaceModel } from 'src/app/Models/enlaceModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { EnlaceHttpService } from 'src/app/services/enlace-http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  enlaces: enlaceModel[];
  articulos: articuloPaginateModel;
  tam: number;
  constructor(private _articuloService: ArticuloHttpService, private _enlaceService: EnlaceHttpService) {
    this.enlaces = [];
    this.articulos = {} as articuloPaginateModel;
    this.tam = 8;
  }

  ngOnInit(): void {
    this.obtenermasdescargado();
    this.obtenerArticulos(this.tam);
  }

  public cambiarTamPag() {
    this.obtenerArticulos(this.tam);
  }

  public paginacion(accion: string) {
    if (accion === 'siguiente') {
      this.obtenerArticulos(this.tam, this.articulos.next_page_url);
    }
    if (accion === 'anterior') {
      this.obtenerArticulos(this.tam, this.articulos.prev_page_url);
    }
    if (accion === 'primera') {
      this.obtenerArticulos(this.tam, this.articulos.first_page_url);
    }
    if (accion === 'ultima') {
      this.obtenerArticulos(this.tam, this.articulos.last_page_url);
    }
  }

  private obtenerArticulos(tam: number, url?) {
    this._articuloService.getListaAticulos(tam, url).subscribe((resp: any) => {
      this.articulos = resp;
    });
  }

  private obtenermasdescargado() {
    this._enlaceService.masdescargado().subscribe((data: any) => {
      this.enlaces = data;
    });
  }
}
