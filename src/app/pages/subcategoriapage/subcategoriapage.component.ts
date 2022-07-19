import { nombreCat } from './../../Models/categoriaModel';
import { ArticuloHttpService } from './../../services/articulo-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { articuloPaginateModel } from './../../Models/cardModel';
import { Component, OnInit } from '@angular/core';
import { CategoriaHttpService } from 'src/app/services/categoria-http.service';

@Component({
  selector: 'app-subcategoriapage',
  templateUrl: './subcategoriapage.component.html',
  styleUrls: ['./subcategoriapage.component.scss'],
})
export class SubcategoriapageComponent implements OnInit {
  idCat: number;
  articulos: articuloPaginateModel;
  tam: number;
  nombreCategoria: string;
  loading: boolean;
  constructor(
    private rutaActive: ActivatedRoute,
    private _articuloHttp: ArticuloHttpService,
    private _categoriaHttp: CategoriaHttpService,
    private router: Router
  ) {
    this.idCat = this.rutaActive.snapshot.params['id'];
    this.tam = 8;
    this.loading = false;
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
    this._articuloHttp.getArticulosBySubcat(idCat, tam, url).subscribe((resp: any) => {
      this.articulos = resp;
      this.getNombreSubategoria(idCat);
      this.loading = true;
      if (resp.data.length === 0) {
        this.router.navigate(['/']);
      }
    });
  }

  private getNombreSubategoria(idCat: number) {
    this._categoriaHttp.obtenerSubcategoriaNombre(idCat).subscribe((data: nombreCat) => {
      this.nombreCategoria = data.nombre;
    });
  }
}
