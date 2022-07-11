import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { articuloModel } from 'src/app/Models/cardModel';
import { enlaceModel } from 'src/app/Models/enlaceModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { EnlaceHttpService } from 'src/app/services/enlace-http.service';

@Component({
  selector: 'app-articulopage',
  templateUrl: './articulopage.component.html',
  styleUrls: ['./articulopage.component.scss'],
})
export class ArticulopageComponent implements OnInit {
  id: number;
  articulo!: articuloModel;
  enlaces: enlaceModel[];
  tieneEnlaces: boolean;
  constructor(
    private rutaActiva: ActivatedRoute,
    private articuloHttp: ArticuloHttpService,
    private enlaceHttp: EnlaceHttpService
  ) {
    this.id = 0;
    this.enlaces = [];
    this.tieneEnlaces = false;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.obtenerArticulo(this.id);
    this.obtenerEnlaces(this.id);
  }

  private obtenerArticulo(id: number) {
    this.articuloHttp.getArticulo(id).subscribe((articulo: articuloModel) => {
      this.articulo = articulo;
    });
  }

  private obtenerEnlaces(id: number) {
    this.enlaceHttp
      .obtenerEnlacesDelArticulo(id)
      .subscribe((data: enlaceModel[]) => {
        this.enlaces = data;
        if (data.length > 0) {
          this.tieneEnlaces = true;
        }
      });
  }

  public sumarDescarga(id: number) {
    this.enlaceHttp.sumarDescarga(id).subscribe((data: enlaceModel) => {
      this.obtenerEnlaces(this.id);
    }
    );
  }
}
