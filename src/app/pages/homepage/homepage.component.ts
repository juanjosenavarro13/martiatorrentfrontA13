import { Component, OnInit } from '@angular/core';
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
  loading: boolean;
  tam: number;
  constructor(private _articuloService: ArticuloHttpService, private _enlaceService: EnlaceHttpService) {
    this.datosCard = [];
    this.enlaces = [];
    this.loading = true;
    this.tam = 12;
  }

  ngOnInit(): void {
    this.obtenerArticulos(this.tam);
    this.obtenermasdescargado();
  }

  private obtenerArticulos(tam: number, url = '') {
    this._articuloService.getListaAticulos(tam, url).subscribe(
      (resp: any) => {
        this.paginate = resp;
        this.datosCard = resp.data;
        this.loading = false;
      },
      error => {
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
  private obtenermasdescargado() {
    this._enlaceService.masdescargado().subscribe((data: any) => {
      this.enlaces = data;
    });
  }
}
