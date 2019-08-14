import { TestBed } from '@angular/core/testing';

import { AgotApiService } from './agot-api.service';

describe('AgotApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgotApiService = TestBed.get(AgotApiService);
    expect(service).toBeTruthy();
  });
});
