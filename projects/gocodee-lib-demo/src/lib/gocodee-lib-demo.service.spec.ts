import { TestBed } from '@angular/core/testing';

import { GocodeeLibDemoService } from './gocodee-lib-demo.service';

describe('GocodeeLibDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GocodeeLibDemoService = TestBed.get(GocodeeLibDemoService);
    expect(service).toBeTruthy();
  });
});
