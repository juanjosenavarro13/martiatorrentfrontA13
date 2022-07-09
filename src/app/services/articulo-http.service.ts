import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cardModel } from '../components/card/cardModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloHttpService {
  constructor(private _http: HttpClient) {}

  public getListaAticulos(): Observable<cardModel[]> {
    return this._http.get<cardModel[]>(environment.apiUrl + '/articulo');
  }
}
