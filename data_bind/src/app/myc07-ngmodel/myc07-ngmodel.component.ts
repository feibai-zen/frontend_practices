import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myc07-ngmodel',
  imports: [FormsModule],
  templateUrl: './myc07-ngmodel.component.html',
  styleUrl: './myc07-ngmodel.component.css'
})
export class Myc07NgmodelComponent {
  uname = 'dingding';
  userName = ''

  nameChangeProcessor() {
    console.log(this.userName)
  }

}
