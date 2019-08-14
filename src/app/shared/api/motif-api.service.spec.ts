import { TestBed } from '@angular/core/testing';

import { MotifApiService } from './motif-api.service';

describe('MotifApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotifApiService = TestBed.get(MotifApiService);
    expect(service).toBeTruthy();
  });
});
