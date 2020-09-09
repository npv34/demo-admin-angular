import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./layout/login/login.component";
import {MasterComponent} from "./layout/master/master.component";
import {DashboardComponent} from "./layout/dashboard/dashboard.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {IsAuthenGuard} from "./is-authen.guard";


const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'users',
        children: [
          {path: '', component: UserListComponent}
        ]
      },
    ],
    canActivate: [IsAuthenGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
