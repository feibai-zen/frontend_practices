import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc01TodolistComponent } from './myc01-todolist/myc01-todolist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc01TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_list';
}
