import { TestBed } from '@angular/core/testing';

import { SanityserviceService } from './sanityservice.service';

describe('SanityserviceService', () => {
  let service: SanityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
