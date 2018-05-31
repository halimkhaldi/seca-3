import { CalendarComponent } from './../calendar/calendar.component';
import { DashboardComponent } from './../dashboard-module/dashboard/dashboard.component';
import { LoginComponent } from './../login-module/login/login.component';
import { UsersComponent } from './../user-module/users/users.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecordsComponent} from './../record-module/records/records.component';
import { SignupComponent } from '../signup-module/signup/signup.component';
import { UserComponent } from '../user-module/user/user.component';
import {LogoutComponent} from '../logout/logout.component';
const routes: Routes = [
      {
        path:'login',
        component:LoginComponent
      },{
        path:'dashboard',
        component:DashboardComponent,
        children:[
          {
            path:'',
            component:RecordsComponent
          },{
            path:'calendar',
            component:CalendarComponent
          }
        ]
      }
      ,{
        path:'signup',
        component:SignupComponent
      },{
        path:'',
        component:UsersComponent
      },
      {
        path:'users/:id',
        component: RecordsComponent
      },{
        path:'logout',
        component:LogoutComponent
      }
  ];
const childRoute: Routes = [
    {
      path:'dashboard/calendar',
      component:CalendarComponent
    }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(childRoute)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
