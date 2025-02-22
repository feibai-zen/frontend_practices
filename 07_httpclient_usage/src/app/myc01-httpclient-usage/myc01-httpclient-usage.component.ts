import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myc01-httpclient-usage',
  imports: [],
  templateUrl: './myc01-httpclient-usage.component.html',
  styleUrl: './myc01-httpclient-usage.component.css',
  providers: [HttpClient]
})
export class Myc01HttpclientUsageComponent {
  private productList: object[] = []
  private pageNo = 0

  constructor(private httpClient: HttpClient) {

  }

  loadPage() {
    this.pageNo++
    let url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=7483357820811136175&ipn=rj&ct=201326592&is=&fp=result&fr=&word=%E5%A3%81%E7%BA%B8&cg=wallpaper&queryWord=%E5%A3%81%E7%BA%B8&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=60&rn=30&gsm=3c&1740024216516=';
    this.httpClient.get(url).subscribe((res: any) => {
      console.log('得到请求到的消息')
      console.log(res.data)
      // this.productList = res.data  只展示下一页数据 
      this.productList.concat(res.data) //将返回的数据追加进来
    })
  }

}
