import { TestBed, inject } from '@angular/core/testing';

import { BritRequestService } from './brit-request.service';

describe('BritRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BritRequestService]
    });
  });

  it('should be created', inject([BritRequestService], (service: BritRequestService) => {
    expect(service).toBeTruthy();
  }));
});
