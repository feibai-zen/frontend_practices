import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SecurityComponent } from './security/security.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'user/center',
        component: UserCenterComponent,
        children: [
            // 二级路由 挂载点要放在 UserCenterComponent.html中
            // 二级路由默认项
            { path: '', component: InfoComponent },
            // user/center/info
            { path: 'info', component: InfoComponent },
            // user/center/avatar
            { path: 'avatar', component: AvatarComponent },
            // /user/center/security
            { path: 'security', component: SecurityComponent }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];