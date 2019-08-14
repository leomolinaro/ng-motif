import { TestBed } from '@angular/core/testing';

import { AgotRemoteService } from './agot-remote.service';

describe('AgotRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgotRemoteService = TestBed.get(AgotRemoteService);
    expect(service).toBeTruthy();
  });
});
