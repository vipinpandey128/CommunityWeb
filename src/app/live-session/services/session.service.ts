import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LiveSession } from '../models/livesession';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = environment.apiEndpoint + "/api/LiveSession/";
constructor(private http: HttpClient) { }

  // Get All LiveSession
  public GetLiveSessionByID(id) {
    return this.http.get<LiveSession>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

   // Get All LiveSession
   public GetAllLiveSessions() {
    return this.http.get<LiveSession[]>(this.apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All LiveSession
  public SaveLiveSession(LiveSession:any) {
    console.log(LiveSession);
    return this.http.post<any>(this.apiUrl,LiveSession,{}).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public UpdateLiveSession(LiveSession:LiveSession) {
    return this.http.put<any>(this.apiUrl+LiveSession.liveSessionId,LiveSession,{}).pipe(tap(data => data),
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

