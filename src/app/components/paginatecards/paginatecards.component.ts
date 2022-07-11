import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { articuloModel, articuloPaginateModel } from 'src/app/Models/cardModel';
import { enlaceModel } from 'src/app/Models/enlaceModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';

@Component({
  selector: 'app-paginatecards',
  templateUrl: './paginatecards.component.html',
  styleUrls: ['./paginatecards.component.scss'],
})
export class PaginatecardsComponent implements OnInit {
  @Input() datosCard: articuloModel[];
  @Input() paginate!: articuloPaginateModel;
  @Input() url: string;
  @Input() tam: number;
  urlActual: string;
  constructor(private _articuloService: ArticuloHttpService, private router: Router) {
    this.datosCard = [];
    this.tam = 0;
    this.urlActual = this.router.url;
    this.url = '';
  }

  ngOnInit(): void {}

  private obtenerArticulos(tam: number, url = '') {
    this._articuloService.getListaAticulos(tam, url).subscribe((resp: any) => {
      this.paginate = resp;
      this.datosCard = resp.data;
      console.log(resp);
    });
  }

  public cambiarTam() {
    console.log(this.tam);
    console.log(this.url);
    this.obtenerArticulos(this.tam, this.url);
  }

  public cambiarPag(action: string) {
    let url;

    if (action == 'siguiente') {
      url = this.paginate.next_page_url;
    } else if (action == 'anterior') {
      url = this.paginate.prev_page_url;
    } else if (action == 'primera') {
      url = this.paginate.first_page_url;
    } else if (action == 'ultima') {
      url = this.paginate.last_page_url;
    }

    this.obtenerArticulos(this.tam, url);
  }
}
