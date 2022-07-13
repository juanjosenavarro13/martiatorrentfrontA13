import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';

@Component({
  selector: 'app-registropage',
  templateUrl: './registropage.component.html',
  styleUrls: ['./registropage.component.scss'],
})
export class RegistropageComponent implements OnInit {
  constructor(private usuarioHttp: UsuarioHttpService) {}

  ngOnInit(): void {}

  public registro(usuario: usuarioModel) {
    this.usuarioHttp.registro(usuario).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
