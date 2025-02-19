import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myc02GoodsListComponent } from './myc02-goods-list/myc02-goods-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Myc02GoodsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06_object_management';
}
