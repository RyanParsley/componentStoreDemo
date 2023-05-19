import { Injectable } from '@angular/core';
import { Grocery } from '../interfaces/grocery.interface';
import { Observable } from 'rxjs';
import { ComponentStore } from '@ngrx/component-store';
import { GroceryApiService } from '../services/grocery-api.service';

export interface GroceriesState {
  groceries: Grocery[];
}

@Injectable()
export class GroceriesStore extends ComponentStore<GroceriesState> {
  constructor(private groceryApiService: GroceryApiService) {
    super({ groceries: [] });
  }

  readonly groceries$: Observable<Grocery[]> =
    this.groceryApiService.getGroceryList();
}
