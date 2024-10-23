import { TestBed } from '@angular/core/testing';

import { NationalizeService } from './nationalize.service';

describe('NationalizeService', () => {
  let service: NationalizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationalizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
