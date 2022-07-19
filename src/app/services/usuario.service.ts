import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private logeado = new BehaviorSubject<boolean>(false);
  logeado$ = this.logeado.asObservable();

  private usuario = new BehaviorSubject<usuarioModel>({} as usuarioModel);
  usuario$ = this.usuario.asObservable();

  constructor(private _usuarioHttp: UsuarioHttpService) {}

  login() {
    this.logeado.next(true);
  }

  setLocalStorage(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logOut() {
    this.logeado.next(false);
    localStorage.removeItem('access_token');
  }

  setUsuario(usuario: usuarioModel) {
    this.usuario.next(usuario);
  }

  perfil(): Observable<usuarioModel> {
    let token = localStorage.getItem('access_token');
    return this._usuarioHttp.perfil(token!);
  }
}
