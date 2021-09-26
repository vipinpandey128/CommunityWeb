import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material';
import {delay} from 'rxjs/operators';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
            ]
})
export class AppComponent{
  showSpinner: boolean;
  title = 'Community Web';
}
