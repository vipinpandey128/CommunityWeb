import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSort, MatPaginator, MatTableDataSource } from "@angular/material";
import { Donate } from "../donate/models/donate";
import { DonateService } from "../donate/services/donate.service";
import { FooterService } from "./service/footer.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  footer: FormGroup;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = [
    "headerInfoId",
    "companyName",
    "companyAddress",
    "email",
    "mobile",
    "webSiteName",
  ];
  dataSource: any;
  footerArray: any[] = [];
  errorMessage: any;
  offset: any;
  constructor(
    private formBuilder: FormBuilder,
    private footerService: FooterService
  ) {}

  ngOnInit() {
    this.footer = this.formBuilder.group({
      companyName: [null, Validators.required],
      companyAddress: [null, Validators.required],
      webSiteName: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
      isActive: false,
    });
    this.showAll();
  }

  showAll() {
    this.footerService.GetFooter().subscribe(
      (data) => {
        this.footerArray.push(data);
        this.dataSource = new MatTableDataSource(this.footerArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  submit() {
    this.footerService.SaveFooter(this.footer.value).subscribe((data) => {
      if (data.isSuccessStatusCode) {
        alert("Data Saved Successfully!!!");
        this.showAll();
      } else {
        alert("Invalid Data!!!");
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
