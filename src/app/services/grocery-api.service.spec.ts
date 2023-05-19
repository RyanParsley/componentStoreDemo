import { TestBed } from '@angular/core/testing';

import { GroceryApiService } from './grocery-api.service';

describe('GroceryApiService', () => {
  let service: GroceryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
