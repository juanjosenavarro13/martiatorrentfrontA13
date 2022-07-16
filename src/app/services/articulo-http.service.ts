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

  public getListaAticulos(tam: number, url = null): Observable<articuloPaginateModel> {
    let endpoint = environment.apiUrl + '/articulosPaginate/' + tam;
    if (url != null) {
      endpoint = url;
    }
    return this._http.get<articuloPaginateModel>(endpoint);
  }

  public getArticulo(id: number): Observable<articuloModel> {
    return this._http.get<articuloModel>(environment.apiUrl + '/articulo/' + id);
  }
}
