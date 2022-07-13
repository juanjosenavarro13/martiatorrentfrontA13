import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuusuarioComponent } from './menuusuario.component';

describe('MenuusuarioComponent', () => {
  let component: MenuusuarioComponent;
  let fixture: ComponentFixture<MenuusuarioComponent>;

  beforeEach(() => {
    const usuarioServiceStub = () => ({ logeado: {} });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuusuarioComponent],
      providers: [{ provide: UsuarioService, useFactory: usuarioServiceStub }],
    });
    fixture = TestBed.createComponent(MenuusuarioComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
