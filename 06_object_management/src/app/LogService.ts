import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root' // 指定当前服务对象在"根模块"中提供
// })
export class LogService {

    doLog(action: string) {
        let uname = 'admin2'
        let time = new Date().getTime();
        console.log(`管理员：${uname} 时间：${time} 动作：${action}`);
    }

}