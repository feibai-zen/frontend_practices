import { Component } from '@angular/core';
import { Myc01ParentBlogComponent } from "./myc01-parent-blog/myc01-parent-blog.component";

@Component({
  selector: 'app-root',
  imports: [Myc01ParentBlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09_sharing_data_parent_child';
}
