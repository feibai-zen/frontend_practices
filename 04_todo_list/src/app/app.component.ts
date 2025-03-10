import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc01TodolistComponent } from './myc01-todolist/myc01-todolist.component';
import { Myc02ShowEmplistComponent } from './myc02-show-emplist/myc02-show-emplist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc01TodolistComponent, Myc02ShowEmplistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_list';
}
