import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [RouterModule], //在使用路由跳转的组件中要声明 RouterModule 组件
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  // 声明依赖，则可以被注入‘路由器’服务
  constructor(private router: Router) {

  }

  jump() {
    // 可以在这里处理跳转之前的额外操作，比如暂停3秒
    // 这里加不加 / 都是可以生效的
    this.router.navigateByUrl('ucenter')
    // this.router.navigateByUrl('product/list')
  }
}
