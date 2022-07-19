import { Component, OnInit } from '@angular/core';
import { categoriaModel, subcategoriaModel } from 'src/app/Models/categoriaModel';
import { CategoriaHttpService } from 'src/app/services/categoria-http.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  nameApp: string;
  categorias: categoriaModel[];
  subcategorias: subcategoriaModel[];
  loading: boolean;
  constructor(private _global: GlobalService, private categoriaHttp: CategoriaHttpService) {
    this.nameApp = this._global.nameApp;
    this.categorias = [];
    this.subcategorias = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias() {
    this.categoriaHttp.obtenerCategorias().subscribe(data => {
      this.categorias = data;
      data.forEach(element => {
        this.obtenerSubcategorias(element.id);
      });
      this.loading = true;
    });
  }

  private obtenerSubcategorias(id: number) {
    this.categoriaHttp.obtenerSubcategorias(id).subscribe(data => {
      this.subcategorias.push(...data);
    });
  }
}
