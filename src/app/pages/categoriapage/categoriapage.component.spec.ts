import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { CategoriapageComponent } from './categoriapage.component';

describe('CategoriapageComponent', () => {
  let component: CategoriapageComponent;
  let fixture: ComponentFixture<CategoriapageComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { params: {} },
      params: { subscribe: (f: (arg0: {}) => any) => f({}) },
    });
    const articuloHttpServiceStub = () => ({
      getListaAticulos: (tam: any, url: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CategoriapageComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: ArticuloHttpService, useFactory: articuloHttpServiceStub },
      ],
    });
    fixture = TestBed.createComponent(CategoriapageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
