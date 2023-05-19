import { Component } from '@angular/core';
import { Department } from './interfaces/grocery.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  departments: Department[] =  Object.values(Department).filter(x => typeof x === "string") as Department[];
}
