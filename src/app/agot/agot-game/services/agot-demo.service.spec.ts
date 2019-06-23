import { TestBed } from '@angular/core/testing';

import { AgotDemoService } from './agot-demo.service';

describe('AgotDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgotDemoService = TestBed.get(AgotDemoService);
    expect(service).toBeTruthy();
  });
});
