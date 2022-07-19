import { UsuarioService } from './../services/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _usuarioService: UsuarioService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._usuarioService.usuario$.subscribe(usuario => {
      if (usuario.rol === 'ADMIN') {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
    return true;
  }
}
