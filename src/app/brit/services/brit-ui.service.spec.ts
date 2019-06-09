import { TestBed, inject } from '@angular/core/testing';

import { BritUiService } from './brit-ui.service';

describe('BritUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BritUiService]
    });
  });

  it('should be created', inject([BritUiService], (service: BritUiService) => {
    expect(service).toBeTruthy();
  }));
});
