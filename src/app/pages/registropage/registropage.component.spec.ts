import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { usuarioModel } from 'src/app/Models/usuarioModel';
import { UsuarioHttpService } from 'src/app/services/usuario-http.service';
import { RegistropageComponent } from './registropage.component';

describe('RegistropageComponent', () => {
  let component: RegistropageComponent;
  let fixture: ComponentFixture<RegistropageComponent>;

  beforeEach(() => {
    const usuarioHttpServiceStub = () => ({
      registro: usuario => ({ subscribe: f => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegistropageComponent],
      providers: [{ provide: UsuarioHttpService, useFactory: usuarioHttpServiceStub }],
    });
    fixture = TestBed.createComponent(RegistropageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('registro', () => {
    it('makes expected calls', () => {
      const usuarioModelStub: usuarioModel = <any>{};
      const usuarioHttpServiceStub: UsuarioHttpService = fixture.debugElement.injector.get(UsuarioHttpService);
      spyOn(usuarioHttpServiceStub, 'registro').and.callThrough();
      component.registro(usuarioModelStub);
      expect(usuarioHttpServiceStub.registro).toHaveBeenCalled();
    });
  });
});
