import { Component, OnInit } from '@angular/core';
import { cardModel } from 'src/app/components/card/cardModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  datosCard: cardModel[];
  loading: boolean;
  constructor(private _articuloService: ArticuloHttpService) {
    this.datosCard = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  private obtenerArticulos() {
    this._articuloService.getListaAticulos().subscribe((resp: any) => {
      this.datosCard = resp;
      this.loading = false;
    });
  }
}
