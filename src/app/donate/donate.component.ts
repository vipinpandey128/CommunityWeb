import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatPaginator, PageEvent, MatTableDataSource } from '@angular/material';
import { ArticleViewModel } from '../Article/Models/Article';
import { Donate } from './models/donate';
import { DonateService } from './services/donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donation: FormGroup;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['donateId', 'title','donationLink','isActive','createdDate','DeleteAction'];
  dataSource: any;
  AssignModel : Donate[]
  errorMessage: any;
  offset: any;
  constructor(
    private formBuilder: FormBuilder,
    private donationService:DonateService
  ) { }

  ngOnInit() {
    this.donation = this.formBuilder.group({
      title: [null, Validators.required],
      donationLink: [null, Validators.required],
      isActive: false
    });
    this.showAllDonateLink();
  }

  showAllDonateLink()
  {
    this.donationService.GetAllDonates().subscribe(
      assignModel => 
      {
        console.log(assignModel);
          this.dataSource = new MatTableDataSource(assignModel);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
  }

  submit() {
    this.donationService.SaveDonate(this.donation.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllDonateLink();
      }
      else{
        alert("Invalid Data!!!");
      }
    })
  }

  Delete(id:any)
  {
    this.donationService.DeleteDonateLinkById(id).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllDonateLink();
      }
      else{
        alert("Invalid Data!!!");
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  getNext(event: PageEvent) {
    this.offset = event.pageSize * event.pageIndex
    // call your api function here with the offset
  
  }

}
