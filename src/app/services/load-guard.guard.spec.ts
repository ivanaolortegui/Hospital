import { TestBed, async, inject } from '@angular/core/testing';

import { LoadGuardGuard } from './load-guard.guard';

describe('LoadGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadGuardGuard]
    });
  });

  it('should ...', inject([LoadGuardGuard], (guard: LoadGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
