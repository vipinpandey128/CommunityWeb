import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import {delay} from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
            ]
})
export class AppComponent implements OnInit {

  title = 'Community Web';
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}