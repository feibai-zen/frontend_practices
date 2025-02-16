import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04-ngstyle',
  imports: [CommonModule],
  templateUrl: './myc04-ngstyle.component.html',
  styleUrl: './myc04-ngstyle.component.css'
})
export class Myc04NgstyleComponent implements OnInit {
  hasMore = true;
  myStyleObj = {
    backgroundColor: '#383',
    color: '#fff',
    'border-color': '#252'
  }

  noMoreStyleObj = {
    backgroundColor: '#ff3',
    color: '#111',
    'border-color': '#252'
  }

  ngOnInit(): void {

  }

  loadMore() {
    this.hasMore = false;
    this.myStyleObj.backgroundColor = '#833';
    this.myStyleObj['border-color'] = '#522';
  }
}
