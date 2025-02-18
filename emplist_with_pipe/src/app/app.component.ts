import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc02ShowEmplistComponent } from './myc02-show-emplist/myc02-show-emplist.component';
import { SexPipePipe } from './sex-pipe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc02ShowEmplistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emplist_with_pipe';
}
