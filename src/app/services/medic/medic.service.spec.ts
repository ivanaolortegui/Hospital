import { TestBed } from '@angular/core/testing';

import { MedicService } from './medic.service';

describe('MedicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicService = TestBed.get(MedicService);
    expect(service).toBeTruthy();
  });
});
