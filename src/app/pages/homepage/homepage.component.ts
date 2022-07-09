import { Component, OnInit } from '@angular/core';
import { cardModel, carPaginateModel } from 'src/app/components/card/cardModel';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  paginate!: carPaginateModel;
  datosCard: cardModel[];
  loading: boolean;
  tam: number;
  constructor(private _articuloService: ArticuloHttpService) {
    this.datosCard = [];
    this.loading = true;
    this.tam = 8;
  }

  ngOnInit(): void {
    this.obtenerArticulos(8);
  }

  private obtenerArticulos(tam: number, url = '') {
    this._articuloService.getListaAticulos(tam, url).subscribe(
      (resp: any) => {
        this.paginate = resp;
        this.datosCard = resp.data;
        this.loading = false;
      },
      (error) => {
        if (error.status != 500) {
          console.log(error);
        }
        this.loading = true;
      }
    );
  }

  public cambiarTam() {
    this.obtenerArticulos(this.tam);
  }

  public changePage(action: string) {
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
