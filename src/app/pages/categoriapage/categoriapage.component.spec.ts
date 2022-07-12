import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriapageComponent } from './categoriapage.component';

describe('CategoriapageComponent', () => {
  let component: CategoriapageComponent;
  let fixture: ComponentFixture<CategoriapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriapageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
