import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoriaModel, subcategoriaModel } from '../Models/categoriaModel';

@Injectable({
  providedIn: 'root',
})
export class CategoriaHttpService {
  constructor(private _http: HttpClient) {}

  public obtenerCategorias(): Observable<categoriaModel[]> {
    return this._http.get<categoriaModel[]>(environment.apiUrl + '/categorias');
  }

  public obtenerSubcategorias(id: number): Observable<subcategoriaModel[]> {
    return this._http.get<subcategoriaModel[]>(
      environment.apiUrl + '/subcategorias/' + id
    );
  }
}
