import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  private data: any;
  token: any;
  constructor(private loader: LoaderService) {}

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

    console.log("testing");
    console.log(req);
    this.requests.push(req);
    this.loader.isLoading.next(true);
    return Observable.create((observer) => {
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
    });
  }
}