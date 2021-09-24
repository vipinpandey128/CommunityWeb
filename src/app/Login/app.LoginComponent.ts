import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './Models/app.LoginModel';
import { LoginService } from './Services/app.LoginService';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
    templateUrl: './app.login.html',
    styleUrls: ['./app.LoginComponent.css'
    ]
})

export class LoginComponent implements OnInit
{
    
    ngOnInit(): void {
        localStorage.clear();
    }
    private _loginservice;
    output: any;

    actionButtonLabel: string = 'Retry';
    action: boolean = false;
    setAutoHide: boolean = true;
    autoHide: number = 2000;
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';


    constructor(private _Route: Router,public snackBar: MatSnackBar, loginservice: LoginService) 
    {
        this._loginservice = loginservice;
    }

    LoginModel: LoginModel = new LoginModel();

    onSubmit() 
    {
        this._loginservice.validateLoginUser(this.LoginModel).subscribe(
            response => 
            {     
                if (response== null) 
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;
                  
                    this.snackBar.open("Invalid Username and Password", this.action ? this.actionButtonLabel : undefined, config);

                    this._Route.navigate(['Login']);
                }

                if (response.token != null) 
                {
                    let config = new MatSnackBarConfig();
                    config.duration = this.setAutoHide ? this.autoHide : 0;
                    config.verticalPosition = this.verticalPosition;
                  
                    this.snackBar.open("Logged in Successfully", this.action ? this.actionButtonLabel : undefined, config);
                    this._Route.navigate(['/Admin/Dashboard']);
                }
            });

    }
}