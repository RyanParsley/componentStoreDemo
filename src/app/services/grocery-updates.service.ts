import { Injectable } from '@angular/core';
import { GroceryRandomizerService } from './grocery-randomizer.service';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Grocery } from '../interfaces/grocery.interface';

@Injectable({
  providedIn: 'root'
})
export class GroceryUpdatesService {

  constructor(private readonly randomizer: GroceryRandomizerService) { }

  public getGroceryList(): Observable<Grocery[]> {
    return interval(5000).pipe(
      map(() => Array.from({length: 3}).map(() => ({
        name: this.randomizer.getRandomFood(),
        amount: Math.floor((Math.random() * 2) + 1)
    }))));
  }
}
