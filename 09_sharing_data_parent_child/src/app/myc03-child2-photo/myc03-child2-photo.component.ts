import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-myc03-child2-photo',
  imports: [],
  templateUrl: './myc03-child2-photo.component.html',
  styleUrl: './myc03-child2-photo.component.css'
})
export class Myc03Child2PhotoComponent {

  @Input()
  public child2_userName = '';

  constructor() { }

}
