import { TestBed } from '@angular/core/testing';

import { ProductPurchasedService } from './product-purchased.service';

describe('ProductPurchasedService', () => {
  let service: ProductPurchasedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPurchasedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
