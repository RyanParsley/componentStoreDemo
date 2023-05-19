import { Component, Input } from '@angular/core';
import { Grocery } from 'src/app/interfaces/grocery.interface';

@Component({
  selector: 'app-grocery-item',
  template: `
    <div
      (click)="useItem()"
      [ngClass]="{ complete: item.amount === 0 }"
      class="display"
    >
      <span>{{ item.name }}</span>
      <span>{{ item.amount }}</span>
    </div>
  `,
  styleUrls: ['./grocery-item.component.scss'],
})
export class GroceryItemComponent {
  @Input() item!: Grocery;

  public useItem() {
    this.item.amount--;
  }
}
