import { Injectable } from '@angular/core';
import { Department, Food } from '../interfaces/grocery.interface';

@Injectable({
  providedIn: 'root'
})
export class GroceryCategorizerService {

  public getDepartment(food: Food): Department {
    const meats = [Food.Steak, Food.Chicken, Food.Pork, Food.Rabbit, Food.Crab, Food.Shrimp, Food.Tuna, Food.Salmon];
    const produce = [Food.Cucumber, Food.Onion, Food.Corn, Food.Potato, Food.Broccoli, Food.Tomato, Food.Apple, Food.Orange, Food.Pear, Food.Pineapple, Food.Lettuce];
    const baked = [Food.Bread, Food.Roll, Food.Cake, Food.Pasta, Food.Baguette, Food.Cracker];
    const seasoning = [Food.Salt, Food.Pepper, Food.Garlic, Food.Oregano, Food.Basil, Food.Paprika, Food.Cumin]
    const dairy = [Food.Milk, Food.Cheddar, Food.Pepperjack, Food.Swiss, Food.Yogurt, Food.Parmesan, Food.Mozzerella];

    if (meats.includes(food)) {
      return Department.Butcher;
    } else if (produce.includes(food)) {
      return Department.Produce;
    } else if (baked.includes(food)) {
      return Department.Bakery;
    } else if (seasoning.includes(food)) {
      return Department.Seasonings;
    } else if (dairy.includes(food)) {
      return Department.Dairy;
    } else {
      throw 'Unknown food';
    }
  }
}
