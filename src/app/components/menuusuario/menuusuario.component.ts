import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menuusuario',
  templateUrl: './menuusuario.component.html',
  styleUrls: ['./menuusuario.component.scss'],
})
export class MenuusuarioComponent implements OnInit {
  logeado: boolean;
  constructor(private usuarioService: UsuarioService) {
    this.logeado = this.usuarioService.logeado;
  }

  ngOnInit(): void {
    console.log(this.logeado);
  }
}
