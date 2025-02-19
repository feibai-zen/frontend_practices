import { Component, OnInit } from '@angular/core';
import { LogService } from '../LogService';

@Component({
  selector: 'app-myc02-goods-list',
  imports: [],
  templateUrl: './myc02-goods-list.component.html',
  styleUrl: './myc02-goods-list.component.css',
  providers: [LogService]
})
export class Myc02GoodsListComponent {
  log!: LogService

  constructor(log: LogService) {
    this.log = log
  }

  doAdd() {
    // console.log('正在执行数据库添加操作...')

    // let uname = 'admin2'
    // let time = new Date().getTime();
    // let action = '添加了新的商品: xxxx'
    // console.log(`管理员：${uname} 时间：${time} 动作：${action}`);
    this.log.doLog('添加了新的商品: xxxx')

  }

  doDel() {
    // console.log('正在执行数据删除操作...')

    // let uname = 'admin3'
    // let time = new Date().getTime();
    // let action = '删除了已有商品: xxxx'
    // console.log(`管理员：${uname} 时间：${time} 动作：${action}`);
    this.log.doLog('删除了已有商品: xxxx')

  }

}
