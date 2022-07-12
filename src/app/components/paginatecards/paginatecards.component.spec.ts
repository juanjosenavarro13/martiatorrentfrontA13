import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatecardsComponent } from './paginatecards.component';

describe('PaginatecardsComponent', () => {
  let component: PaginatecardsComponent;
  let fixture: ComponentFixture<PaginatecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatecardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
