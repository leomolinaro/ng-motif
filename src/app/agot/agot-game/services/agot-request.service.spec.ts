import { TestBed, inject } from '@angular/core/testing';

import { AgotRequestService } from './agot-request.service';

describe('AgotRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgotRequestService]
    });
  });

  it('should be created', inject([AgotRequestService], (service: AgotRequestService) => {
    expect(service).toBeTruthy();
  }));
});
