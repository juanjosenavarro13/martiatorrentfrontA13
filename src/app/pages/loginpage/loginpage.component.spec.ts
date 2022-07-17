import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { LoginpageComponent } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(() => {
    const usuarioServiceStub = () => ({ setUsuario: arg => ({}) });
    const usuarioHttpServiceStub = () => ({
      login: usuario => ({ subscribe: f => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginpageComponent],
      providers: [
        { provide: UsuarioService, useFactory: usuarioServiceStub },
        { provide: UsuarioHttpService, useFactory: usuarioHttpServiceStub },
      ],
    });
    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('makes expected calls', () => {
      const usuarioServiceStub: UsuarioService = fixture.debugElement.injector.get(UsuarioService);
      const usuarioHttpServiceStub: UsuarioHttpService = fixture.debugElement.injector.get(UsuarioHttpService);
      const usuarioModelStub: usuarioModel = <any>{};
      spyOn(usuarioServiceStub, 'setUsuario').and.callThrough();
      spyOn(usuarioHttpServiceStub, 'login').and.callThrough();
      component.login(usuarioModelStub);
      expect(usuarioServiceStub.setUsuario).toHaveBeenCalled();
      expect(usuarioHttpServiceStub.login).toHaveBeenCalled();
    });
  });
});
