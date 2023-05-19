import { Component, Input, OnInit, Output } from '@angular/core';
import { Grocery } from 'src/app/interfaces/grocery.interface';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.scss']
})
export class GroceryItemComponent {
  @Input() item!: Grocery;
}
