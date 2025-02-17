import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myc07-ngmodel',
  imports: [FormsModule],
  templateUrl: './myc07-ngmodel.component.html',
  styleUrl: './myc07-ngmodel.component.css'
})
export class Myc07NgmodelComponent {
  uname = 'dingding';
  userName = ''
  testUserName = ''
  tips_msg = ''

  nameChangeProcessor() {
    console.log(this.userName)
  }

  testUserNameChanging() {
    if (this.testUserName.length <= 3) {
      this.tips_msg = '用户密码长度必须大于3'
    } else if (this.testUserName.length > 9) {
      this.tips_msg = '用户密码长度必须小于9'
    } else {
      this.tips_msg = '用户密码长度合法'
    }

  }
}
