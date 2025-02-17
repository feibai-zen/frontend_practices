import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myc05-ngclass',
  imports: [CommonModule],
  templateUrl: './myc05-ngclass.component.html',
  styleUrl: './myc05-ngclass.component.css'
})
export class Myc05NgclassComponent {

  myClassObj = {
    btn: true,
    'btn-danger': false,
    'btn-success': true  //后出现的会把先出现的覆盖掉
  }


  loadMore2() {
    this.myClassObj.btn = false;
    this.myClassObj['btn-danger'] = true;
    this.myClassObj['btn-success'] = false
  }

}
