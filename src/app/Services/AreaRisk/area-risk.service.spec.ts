import { TestBed } from '@angular/core/testing';

import { AreaRiskService } from './area-risk.service';

describe('AreaRiskService', () => {
  let service: AreaRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
