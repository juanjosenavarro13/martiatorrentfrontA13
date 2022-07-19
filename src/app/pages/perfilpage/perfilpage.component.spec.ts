import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpageComponent } from './perfilpage.component';

describe('PerfilpageComponent', () => {
  let component: PerfilpageComponent;
  let fixture: ComponentFixture<PerfilpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilpageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
