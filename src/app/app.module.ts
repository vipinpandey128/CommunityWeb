import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, } from 'ngx-bootstrap/datepicker';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { RoleComponent } from './RoleMaster/app.Role.component';
import { AllRoleComponent } from './RoleMaster/app.AllRole.component';
import { EditRoleComponent } from './RoleMaster/app.EditRole.component';
import { MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSnackBar, MatSnackBarConfig, MatSnackBarModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule, MatNavList, MatListModule, MatMenuModule } from '@angular/material';
import { UserRegistrationComponent } from './CreateUsers/app.UserRegistration.component';
import { AllUserRegistrationComponent } from './CreateUsers/app.AllUserRegistration.component';
import { EditUserRegistrationComponent } from './CreateUsers/app.EditUserRegistration.component';
import { AssignRoleComponent } from './AssignRole/app.AssignRole.component';
import { AllAssignRoleComponent } from './AssignRole/app.AllAssignRole.component';
import { LoginComponent } from './Login/app.LoginComponent';
import { UserDashboardComponent } from './UserDashboard/app.UserDashboardComponent';
import { AdminDashboardComponent } from './AdminDashboard/app.AdminDashboardComponent';
import { AdminLogoutComponent } from './Login/app.AdminLogout.Component';
import { UserLogoutComponent } from './Login/app.UserLogout.Component';
import { AdminAuthGuardService } from './AuthGuard/AdminAuthGuardService';
import { UserAuthGuardService } from './AuthGuard/UserAuthGuardService';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { ArticleComponent } from './Article/Article.component';
import { EditArticleComponent } from './Article/EditArticle.component';
import { AllArticleComponent } from './Article/AllArticle.component';
import { LayoutComponent } from './Layout/Layout.component';
import { SideNavComponent } from './Navigation/Side-Nav/Side-Nav.component';
import { HeaderComponent } from './Navigation/Header/Header.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { DonateComponent } from './donate/donate.component';



@NgModule({
  declarations: [		
    AppComponent,
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
    MyLoaderComponent,
    ArticleComponent,
    EditArticleComponent,
    AllArticleComponent,
    LayoutComponent,
    SideNavComponent,
    HeaderComponent,
    AffiliateComponent,
    LiveSessionComponent,
    YoutubeVideoComponent,
    DonateComponent,
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
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    AppRoutingModule,
    MatMenuModule
  ],
  exports: [BsDatepickerModule],
  providers: [LoaderService,DatePipe, AdminAuthGuardService,UserAuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
