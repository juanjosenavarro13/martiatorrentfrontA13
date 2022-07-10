import { TestBed } from '@angular/core/testing';

import { EnlaceHttpService } from './enlace-http.service';

describe('EnlaceHttpService', () => {
  let service: EnlaceHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlaceHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
