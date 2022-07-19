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
    if (localStorage.getItem('access_token')) {
      this.usuarioService.perfil().subscribe(
        data => {
          this.usuarioService.setUsuario(data);
          this.usuarioService.login();
        },
        error => {
          localStorage.removeItem('access_token');
        }
      );
    }
  }

  logout() {
    this.usuarioService.logOut();
  }
}
