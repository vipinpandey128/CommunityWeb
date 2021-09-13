import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, } from 'ngx-bootstrap/datepicker';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { RoleComponent } from './RoleMaster/app.Role.component';
import { AllRoleComponent } from './RoleMaster/app.AllRole.component';
import { EditRoleComponent } from './RoleMaster/app.EditRole.component';
import { MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSnackBar, MatSnackBarConfig, MatSnackBarModule, MatProgressSpinnerModule } from '@angular/material';
import { UserRegistrationComponent } from './CreateUsers/app.UserRegistration.component';
import { AllUserRegistrationComponent } from './CreateUsers/app.AllUserRegistration.component';
import { EditUserRegistrationComponent } from './CreateUsers/app.EditUserRegistration.component';
import { AssignRoleComponent } from './AssignRole/app.AssignRole.component';
import { AllAssignRoleComponent } from './AssignRole/app.AllAssignRole.component';
import { LoginComponent } from './Login/app.LoginComponent';
import { AppAdminLayoutComponent } from './_layout/app-adminlayout.component';
import { UserDashboardComponent } from './UserDashboard/app.UserDashboardComponent';
import { AdminDashboardComponent } from './AdminDashboard/app.AdminDashboardComponent';
import { AppUserLayoutComponent } from './_layout/app-userlayout.component';
import { AdminLogoutComponent } from './Login/app.AdminLogout.Component';
import { UserLogoutComponent } from './Login/app.UserLogout.Component';
import { AdminAuthGuardService } from './AuthGuard/AdminAuthGuardService';
import { UserAuthGuardService } from './AuthGuard/UserAuthGuardService';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';



@NgModule({
  declarations: [
    AppComponent,

    AppAdminLayoutComponent,
    AppUserLayoutComponent,
    RoleComponent,
    AllRoleComponent,
    EditRoleComponent,
    UserRegistrationComponent,
    AllUserRegistrationComponent,
    EditUserRegistrationComponent,
    AssignRoleComponent,
    AllAssignRoleComponent,
    LoginComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    RouterModule.forRoot([
    
      {
        path: 'Role',
        component: AppAdminLayoutComponent,
        children: [
          { path: 'Add', component: RoleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:RoleID', component: EditRoleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'All', component: AllRoleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'User',
        component: AppAdminLayoutComponent,
        children: [
          { path: 'Add', component: UserRegistrationComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:UserId', component: EditUserRegistrationComponent , canActivate: [AdminAuthGuardService] },
          { path: 'All', component: AllUserRegistrationComponent, canActivate: [AdminAuthGuardService]  }
        ]
      },
      {
        path: 'Assign',
        component: AppAdminLayoutComponent,
        children: [
          { path: 'Role', component: AssignRoleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'AllRole', component: AllAssignRoleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'Admin',
        component: AppAdminLayoutComponent,
        children: [
          { path: 'Dashboard', component: AdminDashboardComponent , canActivate: [AdminAuthGuardService]  }

        ]
      },
      {
        path: 'User',
        component: AppUserLayoutComponent,
        children: [
          { path: 'Dashboard', component: UserDashboardComponent,canActivate: [UserAuthGuardService] },
        ]
      },
      
      { path: 'Login', component: LoginComponent },
      { path: 'AdminLogout', component: AdminLogoutComponent },
      { path: 'UserLogout', component: UserLogoutComponent },
      
      { path: '', redirectTo: "Login", pathMatch: 'full' },
      { path: '**', redirectTo: "Login", pathMatch: 'full' },


    ], { useHash: true })
  ],
  exports: [BsDatepickerModule],
  providers: [LoaderService,DatePipe, AdminAuthGuardService,UserAuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
