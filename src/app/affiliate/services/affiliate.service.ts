import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Affiliate } from '../models/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {
  private apiUrl = environment.apiEndpoint + "/api/Affiliate/";
constructor(private http: HttpClient) { }

  // Get All Affiliate
  public GetAffiliateByID(id) {
    return this.http.get<Affiliate>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

   // Get All Affiliate
   public GetAllAffiliates() {
    return this.http.get<Affiliate[]>(this.apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All Affiliate
  public SaveAffiliate(Affiliate:any) {
    return this.http.post<any>(this.apiUrl,Affiliate,{}).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public UpdateAffiliate(Affiliate:Affiliate) {
    return this.http.put<any>(this.apiUrl+Affiliate.affiliateId,Affiliate,{}).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  public DeleteAffiliateLinkById(id:any) {
    return this.http.delete<any>(this.apiUrl+id).pipe(tap(data => data),
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

