import { TestBed } from '@angular/core/testing';

import { GroceryCategorizerService } from './grocery-categorizer.service';

describe('GroceryCategorizerService', () => {
  let service: GroceryCategorizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryCategorizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
