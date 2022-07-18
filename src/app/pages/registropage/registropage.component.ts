import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';

@Component({
  selector: 'app-registropage',
  templateUrl: './registropage.component.html',
  styleUrls: ['./registropage.component.scss'],
})
export class RegistropageComponent implements OnInit {
  usuario: usuarioModel;
  registrado: boolean;
  registradoError: boolean;
  constructor(private usuarioHttp: UsuarioHttpService, private router: Router) {
    this.usuario = {} as usuarioModel;
    this.registrado = false;
    this.registradoError = false;
  }

  ngOnInit(): void {}

  public registro(usuario: usuarioModel) {
    this.usuarioHttp.registro(usuario).subscribe(
      data => {
        this.registrado = true;
        this.registradoError = false;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error => {
        this.registradoError = true;
        this.registrado = false;
      }
    );
  }
}
