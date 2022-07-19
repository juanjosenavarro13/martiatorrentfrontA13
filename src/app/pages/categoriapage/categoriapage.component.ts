import { CategoriaHttpService } from 'src/app/services/categoria-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articuloPaginateModel } from 'src/app/Models/cardModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { nombreCat } from 'src/app/Models/categoriaModel';

@Component({
  selector: 'app-categoriapage',
  templateUrl: './categoriapage.component.html',
  styleUrls: ['./categoriapage.component.scss'],
})
export class CategoriapageComponent implements OnInit {
  idCat: number;
  articulos: articuloPaginateModel;
  tam: number;
  nombreCategoria: string;
  constructor(
    private rutaActive: ActivatedRoute,
    private _articuloHttp: ArticuloHttpService,
    private _categoriaHttp: CategoriaHttpService
  ) {
    this.idCat = this.rutaActive.snapshot.params['id'];
    this.tam = 8;
    this.nombreCategoria = '';
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
    this._articuloHttp.getArticulosByCat(idCat, tam, url).subscribe((resp: any) => {
      this.articulos = resp;
      this.getNombreCategoria(idCat);
    });
  }

  private getNombreCategoria(idCat: number) {
    this._categoriaHttp.obtenerCategoriaNombre(idCat).subscribe((data: nombreCat) => {
      this.nombreCategoria = data.nombre;
    });
  }
}
