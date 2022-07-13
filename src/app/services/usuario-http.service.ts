import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioModel, usuarioRegistroModel } from '../Models/usuarioModel';

@Injectable({
  providedIn: 'root',
})
export class UsuarioHttpService {
  constructor(private _http: HttpClient) {}

  public registro(usuario: usuarioModel): Observable<usuarioRegistroModel> {
    return this._http.post<usuarioRegistroModel>(environment.apiUrl + '/usuarios/registro', usuario);
  }
}
