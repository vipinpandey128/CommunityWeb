import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Donate } from '../models/donate';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  private apiUrl = environment.apiEndpoint + "/api/Donate/";
constructor(private http: HttpClient) { }

  // Get All Donate
  public GetDonateByID(id) {
    return this.http.get<Donate>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  public DeleteDonateLinkById(id)
  {
    return this.http.delete<any>(this.apiUrl+id).pipe(tap(data => data),
    catchError(this.handleError)
  );
  }

   // Get All Donate
   public GetAllDonates() {
    return this.http.get<Donate[]>(this.apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All Donate
  public SaveDonate(Donate:any) {
    console.log(Donate);
    return this.http.post<any>(this.apiUrl,Donate,{}).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public UpdateDonate(Donate:Donate) {
    return this.http.put<any>(this.apiUrl+Donate.donateId,Donate,{}).pipe(tap(data => data),
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

