import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { enlaceModel, masdescargado } from '../Models/enlaceModel';

@Injectable({
  providedIn: 'root',
})
export class EnlaceHttpService {
  constructor(private _http: HttpClient) {}

  public obtenerEnlacesDelArticulo(id: number): Observable<enlaceModel[]> {
    return this._http.get<enlaceModel[]>(
      environment.apiUrl + '/articulo/' + id + '/enlaces'
    );
  }

  public masdescargado(): Observable<masdescargado[]> {
    return this._http.get<masdescargado[]>(
      environment.apiUrl + '/articulos/masdescargado'
    );
  }
}
