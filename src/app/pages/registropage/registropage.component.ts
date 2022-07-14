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
  constructor(private usuarioHttp: UsuarioHttpService) {
    this.usuario = new usuarioModel(0, '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  public registro(usuario: usuarioModel) {
    console.log(usuario);
    this.usuarioHttp.registro(usuario).subscribe(
      data => {
        console.log(data);
        alert('registro correcto');
      },
      error => {
        console.log(error);
      }
    );
  }
}
