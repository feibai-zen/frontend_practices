import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc02-ngfor',
  imports: [CommonModule],
  templateUrl: './myc02-ngfor.component.html',
  styleUrl: './myc02-ngfor.component.css'
})
export class Myc02NgforComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  emplist = ['亮亮', '然然', '东东', '涛涛'];

}
