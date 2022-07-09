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
      url = environment.apiUrl + '/articulo/' + tam;
    }
    return this._http.get<carPaginateModel>(url);
  }
}
