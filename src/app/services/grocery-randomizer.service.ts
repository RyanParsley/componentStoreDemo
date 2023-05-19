import { Injectable } from '@angular/core';
import { Food } from '../interfaces/grocery.interface';

@Injectable({
  providedIn: 'root'
})
export class GroceryRandomizerService {

  public getRandomFood(): Food {
    const possible = Object.values(Food);
    return possible[Math.floor(Math.random() * possible.length)];
  }
}
