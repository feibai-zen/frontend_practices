import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03-ngif',
  imports: [CommonModule],
  templateUrl: './myc03-ngif.component.html',
  styleUrl: './myc03-ngif.component.css'
})
export class Myc03NgifComponent implements OnInit {
  payingUser = false;
  age = 4;
  hasMore = true;

  ngOnInit(): void {

  }

  loadMore() {
    this.hasMore = false;
  }

  isPayingUser(): Boolean {
    return true;
  }
}
