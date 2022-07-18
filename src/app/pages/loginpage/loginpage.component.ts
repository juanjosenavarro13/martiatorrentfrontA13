import { UsuarioService } from 'src/app/services/usuario.service';
import { data } from 'jquery';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  logeado: boolean;
  logeadoerror: boolean;
  constructor(
    private _usuarioHttp: UsuarioHttpService,
    private _usuarioService: UsuarioService,
    private router: Router
  ) {
    this.logeado = false;
    this.logeadoerror = false;
  }

  ngOnInit(): void {}

  login(usuario: usuarioModel) {
    this._usuarioHttp.login(usuario).subscribe(
      data => {
        this.logeado = true;
        this.logeadoerror = false;
        this._usuarioService.login();
        this._usuarioService.setLocalStorage(data.access_token);
        this._usuarioService.perfil().subscribe(data => {
          this._usuarioService.setUsuario(data);
        });

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error => {
        this.logeadoerror = true;
        this.logeado = false;
        this._usuarioService.logOut();
      }
    );
  }
}
