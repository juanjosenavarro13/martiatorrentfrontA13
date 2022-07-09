import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cardModel, carPaginateModel } from '../components/card/cardModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloHttpService {
  constructor(private _http: HttpClient) {}

  public getListaAticulos(
    tam: number,
    url: string
  ): Observable<carPaginateModel> {
    if (url == '') {
      url = environment.apiUrl + '/articulos/' + tam;
    }
    return this._http.get<carPaginateModel>(url);
  }

  public getArticulo(id: number): Observable<cardModel> {
    return this._http.get<cardModel>(environment.apiUrl + '/articulo/' + id);
  }
}
