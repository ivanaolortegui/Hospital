import { TestBed } from '@angular/core/testing';

import { ModalUploadService } from './modal-upload.service';

describe('ModalUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalUploadService = TestBed.get(ModalUploadService);
    expect(service).toBeTruthy();
  });
});
