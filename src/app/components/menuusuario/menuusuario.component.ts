import { usuarioModel } from 'src/app/Models/usuarioModel';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menuusuario',
  templateUrl: './menuusuario.component.html',
  styleUrls: ['./menuusuario.component.scss'],
})
export class MenuusuarioComponent implements OnInit {
  logeado: boolean;
  usuario: usuarioModel;
  constructor(private usuarioService: UsuarioService) {
    this.usuario = {} as usuarioModel;
    this.logeado = false;
  }

  ngOnInit(): void {
    this.usuarioService.logeado$.subscribe(logeado => {
      this.logeado = logeado;
    });
    this.usuarioService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
    });

    let userlocal = localStorage.getItem('usuario');
    let user = {};
    if (userlocal) {
      user = {
        email: JSON.parse(userlocal).email,
        passwordAuth: '130597',
      };
    }
    this.usuarioService.loginAuth(user).subscribe(
      data => {
        this.usuarioService.setUsuario(data.usuario);
        this.usuarioService.login();
      },
      error => {}
    );
  }
}
