import { comentarioModel } from './../../Models/comentarioModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { articuloModel } from 'src/app/Models/cardModel';
import { enlaceModel } from 'src/app/Models/enlaceModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { EnlaceHttpService } from 'src/app/services/enlace-http.service';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';

@Component({
  selector: 'app-articulopage',
  templateUrl: './articulopage.component.html',
  styleUrls: ['./articulopage.component.scss'],
})
export class ArticulopageComponent implements OnInit {
  id: number;
  articulo: articuloModel;
  enlaces: enlaceModel[];
  comentarios: comentarioModel[];
  loading: boolean;
  loadingEnlaces: boolean;
  enlaces0: boolean;
  comentariosLoading: boolean;
  constructor(
    private rutaActiva: ActivatedRoute,
    private articuloHttp: ArticuloHttpService,
    private enlaceHttp: EnlaceHttpService,
    private _usuarioHttp: UsuarioHttpService
  ) {
    this.articulo = {} as articuloModel;
    this.comentarios = [];
    this.id = 0;
    this.enlaces = [];
    this.loading = false;
    this.loadingEnlaces = false;
    this.enlaces0 = false;
    this.comentariosLoading = false;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.obtenerArticulo(this.id);
  }

  private obtenerArticulo(id: number) {
    this.articuloHttp.getArticulo(id).subscribe((articulo: articuloModel) => {
      this.articulo = articulo;
      this.obtenerEnlaces(this.id);
      this.obtenerCopmentarios(this.id);
      this.loading = true;
    });
  }

  private obtenerEnlaces(id: number) {
    this.enlaceHttp.obtenerEnlacesDelArticulo(id).subscribe((data: enlaceModel[]) => {
      this.enlaces = data;
      this.loadingEnlaces = true;
      if (data.length === 0) {
        this.enlaces0 = true;
      }
    });
  }

  private obtenerCopmentarios(id) {
    this._usuarioHttp.obtenerComentariosArticulo(id).subscribe(data => {
      this.comentarios = data;
      this.comentariosLoading = true;
    });
  }

  sumarDescarga(id: number) {
    this.enlaceHttp.sumarDescarga(id).subscribe((data: enlaceModel) => {
      this.obtenerEnlaces(this.id);
    });
  }
}
