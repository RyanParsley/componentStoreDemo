import { TestBed } from '@angular/core/testing';

import { GroceryRandomizerService } from './grocery-randomizer.service';

describe('GroceryRandomizerService', () => {
  let service: GroceryRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
