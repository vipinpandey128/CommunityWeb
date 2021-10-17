import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, } from 'ngx-bootstrap/datepicker';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
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
import { ArticleComponent } from './Article/Article.component';
import { EditArticleComponent } from './Article/EditArticle.component';
import { LayoutComponent } from './Layout/Layout.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { DonateComponent } from './donate/donate.component';
import { MaterialModule } from './Material/Material.module';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [		
    AppComponent,
    UserRegistrationComponent,
    EditUserRegistrationComponent,
    LoginComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ArticleComponent,
    EditArticleComponent,
    LayoutComponent,
    AffiliateComponent,
    LiveSessionComponent,
    YoutubeVideoComponent,
    DonateComponent,
    AboutComponent,
    FooterComponent,
    SocialComponent,
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
    MaterialModule,
    NgxSpinnerModule
  ],
  exports: [BsDatepickerModule],
  providers: [LoaderService,DatePipe, AdminAuthGuardService,UserAuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass:LoaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
