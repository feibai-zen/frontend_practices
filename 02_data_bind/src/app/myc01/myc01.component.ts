import { Component } from '@angular/core';
import { Myc02NgforComponent } from "../myc02-ngfor/myc02-ngfor.component";

@Component({
  selector: 'app-myc01',
  templateUrl: './myc01.component.html',
  styleUrl: './myc01.component.css'
})
export class Myc01Component {
  uname = 'feibai';
  age = 28;

  count = 3;
  // imgUrl = '../assets/1.jpg';
  imgUrl = '1.jpg'

  printUname() {
    console.log(this.age);

  }

  addCount() { this.count++ }

  minusCount() { this.count-- }
}
