import { Component } from '@angular/core';
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


}
