import { TestBed } from '@angular/core/testing';

import { IpGeoService } from './ipgeo.service';

describe('IpgeoService', () => {
  let service: IpGeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpGeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
