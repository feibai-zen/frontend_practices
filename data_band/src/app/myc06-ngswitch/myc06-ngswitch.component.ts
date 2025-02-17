import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myc06-ngswitch',
  imports: [CommonModule, FormsModule],
  templateUrl: './myc06-ngswitch.component.html',
  styleUrl: './myc06-ngswitch.component.css'
})
export class Myc06NgswitchComponent {
  // userLevel = 'normal';
  // userLevel = 'vip';
  // userLevel = 'blackgold';
  userLevel = 'gold';


}
