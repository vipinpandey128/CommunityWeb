import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  data: any;
  constructor(private loader: LoaderService, private router: Router) {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }

    this.loader.isLoading.next(this.requests.length > 0);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.data = JSON.parse(localStorage.getItem('UserDetails'));
    if(this.data==null)
    {
      this.router.navigate(["/Login"]);
    }
    else{
      headers = headers.append('Authorization', 'Bearer ' + `${this.data.token}`);
      req = req.clone({headers});
    }
    this.requests.push(req);
    this.loader.isLoading.next(true);
    return new Observable(((observer) => {
      const subscription = next.handle(req).subscribe((event) => {
        if (event instanceof HttpResponse) {
          this.removeRequest(req);
          observer.next(event);
        }
      },
      err=>{
        this.removeRequest(req);
        observer.error(err);
      },
      ()=>{
        this.removeRequest(req);
        observer.complete();
      }
      );
      //remove request from queue when cancelled
      return ()=>{
        this.removeRequest(req);
        subscription.unsubscribe();
      } 
    }));
  }
}