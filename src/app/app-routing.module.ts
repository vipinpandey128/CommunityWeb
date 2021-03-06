import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './AdminDashboard/app.AdminDashboardComponent';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './Article/Article.component';
import { EditArticleComponent } from './Article/EditArticle.component';
import { AdminAuthGuardService } from './AuthGuard/AdminAuthGuardService';
import { UserAuthGuardService } from './AuthGuard/UserAuthGuardService';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { EditUserRegistrationComponent } from './CreateUsers/app.EditUserRegistration.component';
import { UserRegistrationComponent } from './CreateUsers/app.UserRegistration.component';
import { DonateComponent } from './donate/donate.component';
import { LayoutComponent } from './Layout/Layout.component';
import { LiveSessionComponent } from './live-session/live-session.component';
import { AdminLogoutComponent } from './Login/app.AdminLogout.Component';
import { LoginComponent } from './Login/app.LoginComponent';
import { UserLogoutComponent } from './Login/app.UserLogout.Component';
import { AllRoleComponent } from './RoleMaster/app.AllRole.component';
import { EditRoleComponent } from './RoleMaster/app.EditRole.component';
import { RoleComponent } from './RoleMaster/app.Role.component';
import { UserDashboardComponent } from './UserDashboard/app.UserDashboardComponent';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forRoot([
      {
        path: 'Article',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: ArticleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:ArticleId', component: EditArticleComponent , canActivate: [AdminAuthGuardService] },
          // { path: 'All', component: AllArticleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'Affiliate',
        component: LayoutComponent,
        children: [
          { path: 'Add', component:  AffiliateComponent, canActivate: [AdminAuthGuardService] },
          // { path: 'Edit/:ArticleId', component: EditArticleComponent , canActivate: [AdminAuthGuardService] },
          // { path: 'All', component: AllArticleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'LiveSession',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: LiveSessionComponent , canActivate: [AdminAuthGuardService] },
          // { path: 'Edit/:ArticleId', component: EditArticleComponent , canActivate: [AdminAuthGuardService] },
          // { path: 'All', component: AllArticleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'YoutubeVideos',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: YoutubeVideoComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:YoutubeId', component: EditArticleComponent , canActivate: [AdminAuthGuardService] },
        ]
      },
      {
        path: 'Donate',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: DonateComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:DonateId', component: EditArticleComponent , canActivate: [AdminAuthGuardService] },
        ]
      },
      {
        path: 'Role',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: RoleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:RoleID', component: EditRoleComponent , canActivate: [AdminAuthGuardService] },
          { path: 'All', component: AllRoleComponent , canActivate: [AdminAuthGuardService] }
        ]
      },
      {
        path: 'User',
        component: LayoutComponent,
        children: [
          { path: 'Add', component: UserRegistrationComponent , canActivate: [AdminAuthGuardService] },
          { path: 'Edit/:UserId', component: EditUserRegistrationComponent , canActivate: [AdminAuthGuardService] },
          { path: 'ChangesPass', component: ChangePassComponent, canActivate: [AdminAuthGuardService]  }
        ]
      },
      {
        path: 'Admin',
        component: LayoutComponent,
        children: [
          { path: 'Dashboard', component: AdminDashboardComponent , canActivate: [AdminAuthGuardService]  }

        ]
      },
      
      { path: 'Login', component: LoginComponent },
      { path: 'AdminLogout', component: AdminLogoutComponent },
      { path: 'UserLogout', component: UserLogoutComponent },
      
      { path: '', redirectTo: "Login", pathMatch: 'full' },
      { path: '**', redirectTo: "Login", pathMatch: 'full' },


    ], { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
