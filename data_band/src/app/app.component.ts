import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc01Component } from './myc01/myc01.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data_band';
}
