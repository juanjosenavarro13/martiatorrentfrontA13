import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { UsuarioService } from './../../services/usuario.service';
import { usuarioModel } from './../../Models/usuarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilpage',
  templateUrl: './perfilpage.component.html',
  styleUrls: ['./perfilpage.component.scss'],
})
export class PerfilpageComponent implements OnInit {
  usuario: usuarioModel;
  loading: boolean;
  update: boolean;
  constructor(private _usuarioService: UsuarioService, private _usuarioHttp: UsuarioHttpService) {
    this.usuario = {} as usuarioModel;
    this.loading = false;
    this.update = false;
  }

  ngOnInit(): void {
    this.obtenerUsuario();
  }
  private obtenerUsuario() {
    this._usuarioService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      this.loading = true;
    });
  }

  perfilUpdate(value) {
    let token = this._usuarioService.getToken();
    this._usuarioService.usuario$.subscribe(usuario => {
      value.id = usuario.id;
      value.email = usuario.email;
      this._usuarioHttp.perfilUpdate(token!, value).subscribe(data => {
        this.update = true;
        setTimeout(() => {
          this.update = false;
        }, 3000);
      });
    });
  }
}
