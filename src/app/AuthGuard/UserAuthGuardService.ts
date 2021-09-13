import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LoginSuccessModel } from "../Login/Models/app.LoginModel";

@Injectable()
export class UserAuthGuardService implements CanActivate {
  private data: any;
  constructor(private router: Router) {}

  canActivate() {
    this.data = JSON.parse(localStorage.getItem("UserDetails"));
    if (this.data.userType == "User") {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(["/Login"]);
    return false;
  }
}
