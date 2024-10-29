import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { candesactivateGuard } from './candesactivate.guard';

describe('candesactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => candesactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
