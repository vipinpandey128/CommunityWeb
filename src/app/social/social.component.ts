import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  MatSort,
  MatPaginator,
  MatTableDataSource,
  PageEvent,
} from "@angular/material";
import { ArticleViewModel } from "../Article/Models/Article";
import { SessionService } from "../live-session/services/session.service";
import { Social } from "./model/Social";
import { SocialService } from "./service/Social.service";

@Component({
  selector: "app-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.css"],
})
export class SocialComponent implements OnInit {
  socialForm: FormGroup;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = [
    "socialId",
    "socialLink",
    "socialClass",
    "iconClass",
    "EditAction",
    "DeleteAction"
  ];
  dataSource: any;
  AssignModel: Social[];
  errorMessage: any;
  offset: any;
  constructor(public fb: FormBuilder, private socialSer: SocialService) {}

  ngOnInit() {
    this.reactiveForm();
    this.showSocialList();
  }

  showSocialList() {
    this.socialSer.GetSocialLink().subscribe(
      (assignModel) => {
        this.dataSource = new MatTableDataSource(assignModel);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  /* Reactive form */
  reactiveForm() {
    this.socialForm = this.fb.group({
      socialLink: [null, Validators.required],
      socialClass: [null, Validators.required],
      iconClass: [null, Validators.required],
    });
  }

  submitForm() {
    this.socialSer.SaveSocialLink(this.socialForm.value).subscribe((data) => {
      if (data.isSuccessStatusCode) {
        alert("Data Saved Successfully!!!");
        this.showSocialList();
      } else {
        alert("Invalid Data!!!");
      }
    });
  }

  Delete(id: number) {}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNext(event: PageEvent) {
    this.offset = event.pageSize * event.pageIndex;
    // call your api function here with the offset
  }
}
