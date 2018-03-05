import { MemberProfileComponent } from './member-profile/member-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import {AntiauthService} from './_guards/antiauth.service';

const appRoutes: Routes = [
    { path: 'members', component: MembersComponent, canActivate: [AntiauthService] },
    { path: 'profile', component: MemberProfileComponent, canActivate: [AntiauthService] },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);