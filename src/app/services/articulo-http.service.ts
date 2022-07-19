import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { articuloModel, articuloPaginateModel } from '../Models/cardModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloHttpService {
  constructor(private _http: HttpClient) {}

  getListaAticulos(tam: number, url = null): Observable<articuloPaginateModel> {
    let endpoint = environment.apiUrl + '/articulosPaginate/' + tam;
    if (url != null) {
      endpoint = url;
    }
    return this._http.get<articuloPaginateModel>(endpoint);
  }

  getArticulosByCat(idCat: number, tam: number, url = null): Observable<articuloPaginateModel> {
    let endpoint = environment.apiUrl + '/categoria/' + idCat + '/' + tam;
    if (url != null) {
      endpoint = url;
    }
    return this._http.get<articuloPaginateModel>(endpoint);
  }

  getArticulosBySubcat(idCat: number, tam: number, url = null): Observable<articuloPaginateModel> {
    let endpoint = environment.apiUrl + '/subcategoria/' + idCat + '/' + tam;
    if (url != null) {
      endpoint = url;
    }
    return this._http.get<articuloPaginateModel>(endpoint);
  }

  getArticulo(id: number): Observable<articuloModel> {
    return this._http.get<articuloModel>(environment.apiUrl + '/articulo/' + id);
  }
}
