import { Pipe, PipeTransform } from '@angular/core';


// 使用在html的NG表达式中:
// <element>{{e.salary | pipeName}}</element>
// 
// 使用在属性绑定时:
// <element [title] = "e.salary| pipeName"></element>


@Pipe({
  name: 'sexPipe'
})
export class SexPipe implements PipeTransform {

  transform(value: number, lang = 'zh') {
    if (lang == 'zh') {
      if (value == 1) {
        return '男'
      } else if (value == 0) {
        return '女'
      } else {
        return '未知';
      }
    } else if (lang == 'en') {
      if (value == 1) {
        return 'male'
      } else if (value == 0) {
        return 'female'
      } else {
        return 'unknown';
      }
    } 
    else {
      return null
    }
  }

}
