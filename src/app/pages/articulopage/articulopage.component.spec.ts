import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { EnlaceHttpService } from 'src/app/services/enlace-http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticulopageComponent } from './articulopage.component';

describe('ArticulopageComponent', () => {
  let component: ArticulopageComponent;
  let fixture: ComponentFixture<ArticulopageComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ params: { subscribe: (f: (arg0: {}) => any) => f({}) } });
    const articuloHttpServiceStub = () => ({
      getArticulo: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    const enlaceHttpServiceStub = () => ({
      obtenerEnlacesDelArticulo: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      sumarDescarga: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ArticulopageComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: ArticuloHttpService, useFactory: articuloHttpServiceStub },
        { provide: EnlaceHttpService, useFactory: enlaceHttpServiceStub },
      ],
    });
    fixture = TestBed.createComponent(ArticulopageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
