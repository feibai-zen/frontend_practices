import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc01HttpclientUsageComponent } from './myc01-httpclient-usage/myc01-httpclient-usage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc01HttpclientUsageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07_httpclient_usage';
}
