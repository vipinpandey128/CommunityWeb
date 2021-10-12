import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Youtube } from '../models/youtube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = environment.apiEndpoint + "/api/YoutubeVideo/";
constructor(private http: HttpClient) { }

  // Get All Youtube
  public GetYoutubeByID(id) {
    return this.http.get<Youtube>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

   // Get All Youtube
   public GetAllYoutubes() {
    return this.http.get<Youtube[]>(this.apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  // Get All Youtube
  public SaveYoutube(Youtube:any) {
    return this.http.post<any>(this.apiUrl,Youtube,{}).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }
  public UpdateYoutube(Youtube:Youtube) {
    return this.http.put<any>(this.apiUrl+Youtube.youtubeVideoId,Youtube,{}).pipe(tap(data => data),
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

