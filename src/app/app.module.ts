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
import { MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule, MatNavList, MatListModule, MatMenuModule, MatDatepickerModule } from '@angular/material';
import { UserRegistrationComponent } from './CreateUsers/app.UserRegistration.component';
import { EditUserRegistrationComponent } from './CreateUsers/app.EditUserRegistration.component';
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
import { LayoutComponent } from './Layout/Layout.component';
import { SideNavComponent } from './Navigation/Side-Nav/Side-Nav.component';
import { HeaderComponent } from './Navigation/Header/Header.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { DonateComponent } from './donate/donate.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { UploadComponent } from './upload/upload.component';
import { MaterialModule } from './Material/Material.module';




@NgModule({
  declarations: [		
    AppComponent,
    RoleComponent,
    AllRoleComponent,
    EditRoleComponent,
    UserRegistrationComponent,
    EditUserRegistrationComponent,
    LoginComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    MyLoaderComponent,
    ArticleComponent,
    EditArticleComponent,
    LayoutComponent,
    SideNavComponent,
    HeaderComponent,
    AffiliateComponent,
    LiveSessionComponent,
    YoutubeVideoComponent,
    DonateComponent,
    ChangePassComponent,
    UploadComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  
    
  ],
  exports: [BsDatepickerModule],
  providers: [LoaderService,DatePipe, AdminAuthGuardService,UserAuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
