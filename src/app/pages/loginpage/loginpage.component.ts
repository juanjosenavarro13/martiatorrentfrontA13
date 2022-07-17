import { UsuarioService } from 'src/app/services/usuario.service';
import { data } from 'jquery';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  logeado: boolean;
  logeadoerror: boolean;
  error: any;
  constructor(private _usuarioHttp: UsuarioHttpService, private _usuarioService: UsuarioService) {
    this.logeado = false;
    this.logeadoerror = false;
  }

  ngOnInit(): void {}

  login(usuario: usuarioModel) {
    this._usuarioHttp.login(usuario).subscribe(
      data => {
        console.log('data', data);
        this.logeado = true;
        this.logeadoerror = false;
        this._usuarioService.setUsuario(data.usuario!);
      },
      error => {
        console.log('error', error);
        this.logeadoerror = true;
        this.logeado = false;
        this.error = error;
      }
    );
  }
}
