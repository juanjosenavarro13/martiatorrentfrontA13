import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { FormsModule } from '@angular/forms';
import { PaginatecardsComponent } from './paginatecards.component';

describe('PaginatecardsComponent', () => {
  let component: PaginatecardsComponent;
  let fixture: ComponentFixture<PaginatecardsComponent>;

  beforeEach(() => {
    const routerStub = () => ({ url: {} });
    const articuloHttpServiceStub = () => ({
      getListaAticulos: (tam: any, url: any) => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PaginatecardsComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: ArticuloHttpService, useFactory: articuloHttpServiceStub },
      ],
    });
    fixture = TestBed.createComponent(PaginatecardsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
