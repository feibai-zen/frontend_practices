import { Component } from "@angular/core";
import { MyC02Component } from "./myc02.component";

@Component({
    template: '<h2>我的组件C01</h2><app-myc02></app-myc02><hr>',
    styleUrls: [], // 样式可以省略
    selector: 'myc01',
    imports: [MyC02Component],

})
export class MyC01Component {

} 