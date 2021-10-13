import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, MatPaginator, PageEvent, MatTableDataSource } from '@angular/material';
import { Affiliate } from './models/affiliate';
import { AffiliateService } from './services/affiliate.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {
  affiliate: FormGroup; 
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['affiliateId', 'title','affiliateURL','image','isActive','createdDate','DeleteAction'];
  dataSource: any;
  AssignModel : Affiliate[]
  errorMessage: any;
  offset: any;
  affiliateModel:Affiliate = new Affiliate();
  constructor(
    private formBuilder: FormBuilder,
    private affiliateService:AffiliateService
  ) { }

  ngOnInit() {
    this.affiliate = this.formBuilder.group({
      title: [null, Validators.required],
      affiliateURL: [null, Validators.required],
      isActive: false,
      image: [null],
    });
    this.showAllAffiliates();
  }

  showAllAffiliates()
  {
    this.affiliateService.GetAllAffiliates().subscribe(
      assignModel => 
      {
          this.dataSource = new MatTableDataSource(assignModel);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
  }

  submit() {
    this.affiliateService.SaveAffiliate(this.affiliate.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllAffiliates();
      }
      else{
        alert("Invalid Data!!!");
      }
    })
  }

  Delete(id:any)
  {
    this.affiliateService.DeleteAffiliateLinkById(id).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllAffiliates();
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

  onFileSelect(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        let imageData = reader.result as string;
        this.affiliate.get('image').setValue(imageData);
      };
   
    }
  }
}
