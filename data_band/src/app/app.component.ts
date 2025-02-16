import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc01Component } from './myc01/myc01.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent as Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgstyleComponent } from './myc04-ngstyle/myc04-ngstyle.component';
import { Myc05NgclassComponent } from './myc05-ngclass/myc05-ngclass.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc01Component, Myc02NgforComponent, Myc03NgifComponent, Myc04NgstyleComponent, Myc05NgclassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data_band';
}
