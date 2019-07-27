import { TestBed, inject } from '@angular/core/testing';

import { AgotGameService } from './agot-game.service';

describe('AgotGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgotGameService]
    });
  });

  it('should be created', inject([AgotGameService], (service: AgotGameService) => {
    expect(service).toBeTruthy();
  }));
});
