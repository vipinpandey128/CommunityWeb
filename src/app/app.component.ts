import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { NgxSpinnerModule } from "ngx-spinner";
import { delay } from "rxjs/operators";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [],
})
export class AppComponent {
  loading: boolean = false;
  title = "Community Web";
  constructor() {}

  ngOnInit() {}
}
