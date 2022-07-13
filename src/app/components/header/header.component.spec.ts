import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoriaHttpService } from 'src/app/services/categoria-http.service';
import { GlobalService } from 'src/app/services/global.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    const categoriaHttpServiceStub = () => ({
      obtenerCategorias: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      obtenerSubcategorias: (id: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    const globalServiceStub = () => ({ nameApp: {} });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [
        { provide: CategoriaHttpService, useFactory: categoriaHttpServiceStub },
        { provide: GlobalService, useFactory: globalServiceStub },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
