import { Component } from '@angular/core';

@Component({
  selector: 'app-myc01',
  imports: [],
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
