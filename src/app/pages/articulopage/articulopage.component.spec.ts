import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulopageComponent } from './articulopage.component';

describe('ArticulopageComponent', () => {
  let component: ArticulopageComponent;
  let fixture: ComponentFixture<ArticulopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticulopageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
