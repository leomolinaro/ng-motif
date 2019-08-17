import { TestBed } from '@angular/core/testing';

import { MotifAppsService } from './motif-apps.service';

describe('MotifAppsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotifAppsService = TestBed.get(MotifAppsService);
    expect(service).toBeTruthy();
  });
});
