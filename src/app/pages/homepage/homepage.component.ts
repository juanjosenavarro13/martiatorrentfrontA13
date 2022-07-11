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
  paginate!: articuloPaginateModel;
  datosCard: articuloModel[];
  enlaces: enlaceModel[];
  tam: number;
  constructor(private _articuloService: ArticuloHttpService, private _enlaceService: EnlaceHttpService) {
    this.datosCard = [];
    this.enlaces = [];
    this.tam = 12;
  }

  ngOnInit(): void {
    this.obtenerArticulos(this.tam);
    this.obtenermasdescargado();
  }

  private obtenerArticulos(tam: number, url = '') {
    this._articuloService.getListaAticulos(tam, url).subscribe((resp: any) => {
      this.paginate = resp;
      this.datosCard = resp.data;
    });
  }

  private obtenermasdescargado() {
    this._enlaceService.masdescargado().subscribe((data: any) => {
      this.enlaces = data;
    });
  }
}
