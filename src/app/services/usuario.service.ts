import { Observable, Subject } from 'rxjs';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private logeado: boolean;
  private usuario: usuarioModel;
  constructor() {
    this.usuario = {} as usuarioModel;
    this.logeado = false;
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario(usuario: usuarioModel) {
    this.usuario = usuario;
  }

  getLogeado() {
    return this.logeado;
  }
}
