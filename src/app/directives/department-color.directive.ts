import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { GroceryListComponent } from '../grocery-list/grocery-list.component';
import { Department } from '../interfaces/grocery.interface';

@Directive({
  selector: 'app-grocery-list[appDepartmentColor]'
})
export class DepartmentColorDirective implements OnInit {

  constructor(
    private readonly list: GroceryListComponent,
    private readonly element: ElementRef,
    private readonly renderer: Renderer2) { }

    public ngOnInit(): void {
        const department = this.list.department;
        let color: string;
        switch(department) {
          case Department.Bakery:
            color = 'darkgoldenrod';
            break;
          case Department.Butcher:
            color = 'DarkRed';
            break;
          case Department.Dairy:
            color = 'DarkBlue';
            break;
          case Department.Produce:
            color = 'DarkGreen';
            break;
          case Department.Seasonings:
            color = 'DimGrey';
            break;
        }

        this.renderer.setStyle(this.element.nativeElement, 'background-color', color);
    }

}
