import { TestBed } from '@angular/core/testing';

import { APImarvelService } from './apimarvel.service';

describe('APImarvelService', () => {
  let service: APImarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APImarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
