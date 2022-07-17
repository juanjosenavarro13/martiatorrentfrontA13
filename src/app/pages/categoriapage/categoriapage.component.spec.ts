import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloHttpService } from 'src/app/services/articulo-http.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriapageComponent } from './categoriapage.component';

describe('CategoriapageComponent', () => {
  let component: CategoriapageComponent;
  let fixture: ComponentFixture<CategoriapageComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { params: {} },
      params: { subscribe: f => f({}) },
    });
    const articuloHttpServiceStub = () => ({
      getArticulosByCat: (idCat, tam, url) => ({ subscribe: f => f({}) }),
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
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
