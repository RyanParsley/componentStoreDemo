import { TestBed } from '@angular/core/testing';

import { GroceryUpdatesService } from './grocery-updates.service';

describe('GroceryUpdatesService', () => {
  let service: GroceryUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
