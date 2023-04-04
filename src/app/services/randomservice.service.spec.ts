import { TestBed } from '@angular/core/testing';

import { RandomserviceService } from './randomservice.service';

describe('RandomserviceService', () => {
  let service: RandomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
