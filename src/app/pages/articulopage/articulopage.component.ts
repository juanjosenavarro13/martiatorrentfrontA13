import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { cardModel } from 'src/app/components/card/cardModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';

@Component({
  selector: 'app-articulopage',
  templateUrl: './articulopage.component.html',
  styleUrls: ['./articulopage.component.scss'],
})
export class ArticulopageComponent implements OnInit {
  id: number;
  articulo!: cardModel;
  constructor(
    private rutaActiva: ActivatedRoute,
    private articuloHttp: ArticuloHttpService
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.obtenerArticulo(this.id);
  }

  private obtenerArticulo(id: number) {
    this.articuloHttp.getArticulo(id).subscribe((articulo: cardModel) => {
      this.articulo = articulo;
      console.log(this.articulo);
    });
  }
}
