import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoriaModel, nombreCat, subcategoriaModel } from '../Models/categoriaModel';

@Injectable({
  providedIn: 'root',
})
export class CategoriaHttpService {
  constructor(private _http: HttpClient) {}

  obtenerCategorias(): Observable<categoriaModel[]> {
    return this._http.get<categoriaModel[]>(environment.apiUrl + '/categorias');
  }

  obtenerSubcategorias(id: number): Observable<subcategoriaModel[]> {
    return this._http.get<subcategoriaModel[]>(environment.apiUrl + '/subcategorias/' + id);
  }

  obtenerCategoriaNombre(id: number): Observable<nombreCat> {
    return this._http.get<nombreCat>(environment.apiUrl + '/categoriaNombre/' + id);
  }
  obtenerSubcategoriaNombre(id: number): Observable<nombreCat> {
    return this._http.get<nombreCat>(environment.apiUrl + '/subcategoriaNombre/' + id);
  }
}
