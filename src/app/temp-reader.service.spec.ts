import { TestBed } from '@angular/core/testing';

import { TempReaderService } from './temp-reader.service';

describe('TempReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempReaderService = TestBed.get(TempReaderService);
    expect(service).toBeTruthy();
  });
});
