import { usuarioLoginModel } from './../Models/usuarioModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioModel, usuarioRegistroModel } from '../Models/usuarioModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioHttpService {
  constructor(private _http: HttpClient) {}

  registro(usuario: usuarioModel): Observable<usuarioRegistroModel> {
    return this._http.post<usuarioRegistroModel>(environment.apiUrl + '/usuario/registro', usuario);
  }

  login(usuario: usuarioModel): Observable<usuarioLoginModel> {
    return this._http.post<usuarioLoginModel>(environment.apiUrl + '/usuario/login', usuario);
  }

  perfil(token: string): Observable<usuarioModel> {
    let bearer = `Bearer ${token}`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });
    return this._http.post<usuarioModel>(environment.apiUrl + '/usuario/perfil', null, { headers: headers });
  }
}
