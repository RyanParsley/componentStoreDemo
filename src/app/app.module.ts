import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { GroceryItemComponent } from './grocery-list/grocery-item/grocery-item.component';
import { DepartmentColorDirective } from './directives/department-color.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    GroceryItemComponent,
    DepartmentColorDirective
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
