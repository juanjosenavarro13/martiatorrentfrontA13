import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { articuloModel, articuloPaginateModel } from 'src/app/Models/cardModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoriapage',
  templateUrl: './categoriapage.component.html',
  styleUrls: ['./categoriapage.component.scss'],
})
export class CategoriapageComponent implements OnInit {
  idCategoria: number;
  tam: number;
  url: string;
  paginate!: articuloPaginateModel;
  datosCard: articuloModel[];
  constructor(private rutaActive: ActivatedRoute, private _articuloHttp: ArticuloHttpService) {
    this.idCategoria = this.rutaActive.snapshot.params['id'];
    this.tam = 12;
    this.datosCard = [];
    this.url = '';
    this.rutaActive.params.subscribe(params => {
      this.idCategoria = params['id'];
      this.url = environment.apiUrl + '/categoria/' + this.idCategoria + '/' + this.tam;
      this.obtenerArticulos(this.tam, this.url);
    });
  }

  ngOnInit(): void {}

  private obtenerArticulos(tam: number, url: string) {
    this._articuloHttp.getListaAticulos(tam, url).subscribe(data => {
      this.paginate = data;
      this.datosCard = data.data;
    });
  }
}
