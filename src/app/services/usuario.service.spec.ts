import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UsuarioService] });
    service = TestBed.inject(UsuarioService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
