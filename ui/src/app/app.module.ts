import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UsersService } from './users.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserModuleModule } from './user-module/user-module.module';
import { RecordModule } from './record-module/record.module';
import { RecordsService } from './records.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login-module/login/login.component';
import { SignupComponent } from './signup-module/signup/signup.component';
import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    UserModuleModule,
    RecordModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [UsersService,RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
