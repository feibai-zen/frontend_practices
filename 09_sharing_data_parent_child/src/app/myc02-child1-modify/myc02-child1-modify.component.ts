import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myc02-child1-modify',
  imports: [FormsModule],
  templateUrl: './myc02-child1-modify.component.html',
  styleUrl: './myc02-child1-modify.component.css'
})
export class Myc02Child1ModifyComponent {

  public userInput = ''
  public child1_userName = ''

  // 事件发射器
  @Output() // 输出型属性，可以向父组件输出数据
  public child1_event = new EventEmitter()

  doModify() {
    // this.child1_userName = this.userInput
    this.child1_event.emit(this.userInput)
  }


}
