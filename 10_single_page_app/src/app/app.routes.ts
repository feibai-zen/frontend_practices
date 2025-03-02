import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    // 声明路由词典--路由地址和路由组件的对应集合
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent },
    { path: 'product/list', component: ProductListComponent },
    { path: 'pdetail', component: ProductDetailComponent },
    { path: 'pdetail/:lid', component: ProductDetailComponent },
    { path: 'ucenter', component: UserCenterComponent },
    // ** 地址匹配任意格式的地址
    { path: '**', component: NotFoundComponent }
];
