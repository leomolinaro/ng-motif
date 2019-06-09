import { TestBed, inject } from '@angular/core/testing';

import { AgotCardHoverService } from './agot-card-hover.service';

describe('AgotCardHoverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgotCardHoverService]
    });
  });

  it('should be created', inject([AgotCardHoverService], (service: AgotCardHoverService) => {
    expect(service).toBeTruthy();
  }));
});
