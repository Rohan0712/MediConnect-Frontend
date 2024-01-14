import { TestBed } from '@angular/core/testing';

import { ProductIdService } from './product-id.service';

describe('ProductIdService', () => {
  let service: ProductIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
