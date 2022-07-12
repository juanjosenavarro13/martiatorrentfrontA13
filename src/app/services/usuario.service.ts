import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  logeado: boolean;
  constructor() {
    this.logeado = false;
  }
}
