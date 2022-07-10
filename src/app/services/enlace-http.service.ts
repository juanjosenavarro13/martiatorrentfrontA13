import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { enlaceModel } from '../Models/enlaceModel';

@Injectable({
  providedIn: 'root',
})
export class EnlaceHttpService {
  constructor(private _http: HttpClient) {}

  public obtenerEnlacesDelArticulo(id: number): Observable<enlaceModel[]> {
    return this._http.get<enlaceModel[]>(
      environment.apiUrl + '/enlaceArticulo/' + id
    );
  }
}
