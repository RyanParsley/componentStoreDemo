import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Department, Food, Grocery } from '../interfaces/grocery.interface';
import { GroceriesStore } from './grocery-list.store';
import { GroceryCategorizerService } from '../services/grocery-categorizer.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grocery-list',
  template: `
    <h2>{{ department }}</h2>
    <app-grocery-item
      *ngFor="let grocery of groceries$ | async"
      [item]="grocery"
    ></app-grocery-item>
  `,
  providers: [GroceriesStore],
  styleUrls: ['./grocery-list.component.scss'],
})
export class GroceryListComponent implements OnInit {
  @Input() department!: Department;

  groceries$ = this.groceriesStore.groceries$.pipe(
    map((groceries: Grocery[]) =>
      groceries.filter(
        (grocery: Grocery) =>
          this.department ===
          this.groceryCategorizer.getDepartment(grocery.name)
      )
    )
  );

  constructor(
    private readonly groceriesStore: GroceriesStore,
    private readonly groceryCategorizer: GroceryCategorizerService
  ) {}

  ngOnInit(): void {}
}
