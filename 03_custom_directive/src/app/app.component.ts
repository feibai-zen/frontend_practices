import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XuyaoqiangdiaoDirective } from './xuyaoqiangdiao.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, XuyaoqiangdiaoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom_directive';
}
