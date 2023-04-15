import { TestBed } from '@angular/core/testing';

import { CreateHambuService } from './create-hambu.service';

describe('CreateHambuService', () => {
  let service: CreateHambuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateHambuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
