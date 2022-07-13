import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { EnlaceHttpService } from 'src/app/services/enlace-http.service';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    const articuloHttpServiceStub = () => ({
      getListaAticulos: (tam: any, url: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    const enlaceHttpServiceStub = () => ({
      masdescargado: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomepageComponent],
      providers: [
        { provide: ArticuloHttpService, useFactory: articuloHttpServiceStub },
        { provide: EnlaceHttpService, useFactory: enlaceHttpServiceStub },
      ],
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
