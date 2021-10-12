import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleSaveModel, ArticleViewModel } from '../Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = environment.apiEndpoint + "/api/Article/";
constructor(private http: HttpClient) { }

  // Get All Article
  public GetArticleByID(id) {
    return this.http.get<ArticleSaveModel>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

   // Get All Article
   public GetAllArticles() {
    return this.http.get<ArticleViewModel[]>(this.apiUrl).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

  public DeleteArticle(id:number) {
    return this.http.delete<any>(this.apiUrl+id).pipe(tap(data => data),
      catchError(this.handleError)
    );
  }

// Get All Article
public SaveArticle(article:any) {
  return this.http.post<any>(this.apiUrl,article,{}).pipe(tap(data => data),
    catchError(this.handleError)
  );
}

  public UpdateArticle(article:ArticleSaveModel) {
    return this.http.put<any>(this.apiUrl+article.articleId,article,{}).pipe(tap(data => data),
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

