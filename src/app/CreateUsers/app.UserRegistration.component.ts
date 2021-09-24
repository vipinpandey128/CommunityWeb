import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserModel } from './Models/app.UserModel';
import { UserService } from './Services/app.UserRegistration.Service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    templateUrl: './app.UserRegistration.html',
    styleUrls: [
    ]
})


export class UserRegistrationComponent implements OnInit {
    private _userService;
    AllUserList: UserModel[];
    errorMessage: any;
    @ViewChild(MatSort,{static: false}) sort: MatSort;
    @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
    displayedColumns: string[] = ['guid', 'UserName', 'FullName', 'EmailId', 'Contactno', 'Status', 'EditAction', 'DeleteAction'];
    dataSource: any;
    UserModel: UserModel = new UserModel();
    output: any;
    ngOnInit(): void {

        this.showAllUsers();
    }

    constructor(
        private datePipe: DatePipe,
        private _Route: Router,
        private userService: UserService
    ) {
        this._userService = userService;
    }
    onSubmit() 
    {
        this._userService.SaveUser(this.UserModel).subscribe(
            response => {
            this.output = response
            if (this.output.statusCode == "409") {
                alert('User Already Exists');
            }
            else if (this.output.statusCode == "200") {
                alert('User Created Successfully');
                this.showAllUsers();
            }
            else {
                alert('Something Went Wrong');
            }
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    Delete(Id): void {
        alert(Id);
        if (confirm("Are you sure to delete User ?")) {
            this._userService.DeleteUser(Id).subscribe
                (
                response => {
                    if (response.StatusCode == "200") {
                        alert('Deleted User Successfully');
                        location.reload();
                    }
                    else {
                        alert('Something Went Wrong');
                        this._Route.navigate(['/AllSchemeMaster']);
                    }
                }
                )
        }
    }

    showAllUsers() {
        this._userService.GetAllUsers().subscribe(
            allUsers => {
                this.AllUserList = allUsers
                this.dataSource = new MatTableDataSource(this.AllUserList);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            },
            error => this.errorMessage = <any>error
        );
    }
    
   
    
}

