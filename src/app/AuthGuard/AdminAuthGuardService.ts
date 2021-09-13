import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AdminAuthGuardService implements CanActivate {
  data: any;
  constructor(private router: Router) {}

  canActivate() {
    this.data = JSON.parse(localStorage.getItem("UserDetails"));
    if (this.data.userType == "Admin") {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(["/Login"]);
    return false;
  }
}
