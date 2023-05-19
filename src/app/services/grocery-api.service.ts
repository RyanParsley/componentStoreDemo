import { Injectable } from '@angular/core';
import { Grocery } from '../interfaces/grocery.interface';
import { GroceryRandomizerService } from './grocery-randomizer.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryApiService {

  constructor(private readonly randomizer: GroceryRandomizerService) {}

  public getGroceryList(): Observable<Grocery[]> {
    return of(Array.from({length: 10}).map(() => ({
      name: this.randomizer.getRandomFood(),
      amount: Math.floor((Math.random() * 5) + 3)
    })));
  }
}
