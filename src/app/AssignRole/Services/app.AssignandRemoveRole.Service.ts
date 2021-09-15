import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AssignRemoveModel } from '../Models/AssignRemoveModel';
import { AssignRolesViewModel } from '../Models/AssignRolesViewModel';
// import { environment } from 'src/app/Shared/environment';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AssignandRemoveRoleService {
  private data: any;
  private apiUrl = environment.apiEndpoint + "/api/CreateRole/";
  token: any;
  username: any;

  constructor(private http: HttpClient) {
  }

  // Get All Users
  public GetAllAssignedRoles() {
    let apiUrl = environment.apiEndpoint + "/api/AssignRoles/";
    return this.http.get<AssignRolesViewModel[]>(apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }



  // AssignRole
  public AssignRole(assignmodel: AssignRemoveModel) {
    let apiUrl = environment.apiEndpoint + "/api/AssignRoles/";
    return this.http.post<any>(apiUrl, assignmodel)
      .pipe(
        catchError(this.handleError)
      );
  }

  // RemoveRole
  public RemoveRole(assignmodel: AssignRemoveModel) {
    let apiUrl = environment.apiEndpoint + "/api/RemoveRole/";
    return this.http.post<any>(apiUrl, AssignRolesViewModel)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
