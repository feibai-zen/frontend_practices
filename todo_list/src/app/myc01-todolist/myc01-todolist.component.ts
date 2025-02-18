import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myc01-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './myc01-todolist.component.html',
  styleUrl: './myc01-todolist.component.css'
})
export class Myc01TodolistComponent {
  todoList = ['开会', '上课', '培训']
  userInput = ''

  addTodoItem() {
    console.log(this.userInput)
    if (!(this.userInput == '')) {
      this.todoList.push(this.userInput);
      this.userInput = ''
    }

  }

  deleteTodoItem(index: number) {
    // 从数组的下标处替换 1 个元素
    this.todoList.splice(index, 1)
  }
}

