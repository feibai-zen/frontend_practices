import { Component, ViewChild } from '@angular/core';
import { Myc02Child1ModifyComponent } from '../myc02-child1-modify/myc02-child1-modify.component';
import { Myc03Child2PhotoComponent } from '../myc03-child2-photo/myc03-child2-photo.component';

@Component({
  selector: 'app-myc01-parent-blog',
  imports: [Myc02Child1ModifyComponent, Myc03Child2PhotoComponent,],
  templateUrl: './myc01-parent-blog.component.html',
  styleUrl: './myc01-parent-blog.component.css'
})
export class Myc01ParentBlogComponent {
  public userName: string = '苍茫大地001'

  doChange(e: string) {
    this.userName = e
  }


  // 使用组件标签传递数据
  @ViewChild('c0', { static: true })
  private paent: any;

  @ViewChild('c1', { static: true })
  private child_1: any

  @ViewChild('c2', { static: true })
  private child_2: any


  // 父组件可以把子组件中的所有属性可以打印出来
  print() {
    console.log(this.paent)
    console.log(this.child_1)
    console.log(this.child_2)


  }

}
