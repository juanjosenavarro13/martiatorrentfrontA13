import { ArticuloHttpService } from './../../services/articulo-http.service';
import { ActivatedRoute } from '@angular/router';
import { articuloPaginateModel } from './../../Models/cardModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategoriapage',
  templateUrl: './subcategoriapage.component.html',
  styleUrls: ['./subcategoriapage.component.scss'],
})
export class SubcategoriapageComponent implements OnInit {
  idCat: number;
  articulos: articuloPaginateModel;
  tam: number;
  constructor(private rutaActive: ActivatedRoute, private _articuloHttp: ArticuloHttpService) {
    this.idCat = this.rutaActive.snapshot.params['id'];
    this.tam = 8;
    this.articulos = {} as articuloPaginateModel;
    this.rutaActive.params.subscribe(data => {
      this.idCat = data['id'];
      this.obtenerArticulos(this.idCat, this.tam);
    });
  }

  ngOnInit(): void {}
  public paginacion(accion: string) {
    if (accion === 'siguiente') {
      this.obtenerArticulos(this.idCat, this.tam, this.articulos.next_page_url);
    }
    if (accion === 'anterior') {
      this.obtenerArticulos(this.idCat, this.tam, this.articulos.prev_page_url);
    }
    if (accion === 'primera') {
      this.obtenerArticulos(this.idCat, this.tam, this.articulos.first_page_url);
    }
    if (accion === 'ultima') {
      this.obtenerArticulos(this.idCat, this.tam, this.articulos.last_page_url);
    }
  }

  public cambiarTamPag() {
    this.obtenerArticulos(this.idCat, this.tam);
  }

  private obtenerArticulos(idCat: number = this.idCat, tam: number = this.tam, url?) {
    this._articuloHttp.getArticulosBySubcat(idCat, tam, url).subscribe((resp: any) => {
      this.articulos = resp;
    });
  }
}
