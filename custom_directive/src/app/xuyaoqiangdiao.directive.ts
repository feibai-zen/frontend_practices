import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appXuyaoqiangdiao]'
})
export class XuyaoqiangdiaoDirective {

  constructor(e: ElementRef) {
    console.log('需要强调 指令实例化一次')
    e.nativeElement.style.background = '#fcc'
    e.nativeElement.style.padding = '10px'
    e.nativeElement.style.color = '#833'
  }

}
