import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyC01Component, MyC02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_try';
}
