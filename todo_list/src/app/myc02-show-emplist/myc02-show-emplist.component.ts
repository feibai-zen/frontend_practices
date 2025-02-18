import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myc02-show-emplist',
  imports: [FormsModule, CommonModule],
  templateUrl: './myc02-show-emplist.component.html',
  styleUrl: './myc02-show-emplist.component.css'
})
export class Myc02ShowEmplistComponent {

  deleteEmp(index: number) {
    console.log('delete' + index)
    this.emplist.splice(index, 1)

  }


  emplist = [
    {
      empid: 1,
      uname: '亮亮',
      age: 10,
      birthday: '2020-08-07',
      salary: 1000
    },
    {
      empid: 2,
      uname: '然然',
      age: 11,
      birthday: '2020-09-07',
      salary: 1002

    },
    {
      empid: 3,
      uname: '乐乐',
      age: 12,
      birthday: '2020-10-07',
      salary: 2000
    },
    {
      empid: 4,
      uname: '涛涛',
      age: 13,
      birthday: '2020-112-07',
      salary: 3000
    }
  ]

}
