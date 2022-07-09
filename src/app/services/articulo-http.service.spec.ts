import { TestBed } from '@angular/core/testing';

import { ArticuloHttpService } from './articulo-http.service';

describe('ArticuloHttpService', () => {
  let service: ArticuloHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
