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

  logOut() {
    this.logeado.next(false);
    localStorage.removeItem('usuario');
  }

  setUsuario(usuario: usuarioModel) {
    this.usuario.next(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  loginAuth(usuario: any): Observable<any> {
    return this._usuarioHttp.loginAuth(usuario);
  }
}
