import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AboutusService } from './service/aboutus.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutUsFormGroup: FormGroup;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = [
    "aboutId",
    "aboutTitle",
    "aboutDesc",
    "aboutImage"
  ];
  dataSource: any;
  aboutusArray: any[] = [];
  errorMessage: any;
  offset: any;
  constructor(
    private formBuilder: FormBuilder,
    private aboutUsService: AboutusService
  ) {}

  ngOnInit() {
    this.aboutUsFormGroup = this.formBuilder.group({
      aboutTitle: [null, Validators.required],
      aboutDesc: [null, Validators.required],
      aboutImage: [null],
      isActive: false,
    });
    this.showAll();
  }

  showAll() {
    this.aboutUsService.GetAboutUs().subscribe(
      (data) => {
        this.aboutusArray.push(data);
        console.log(this.aboutusArray);
        this.dataSource = new MatTableDataSource(this.aboutusArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  submit() {
    this.aboutUsService.SaveAboutUs(this.aboutUsFormGroup.value).subscribe((data) => {
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

  onFileSelect(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        let imageData = reader.result as string;
        this.aboutUsFormGroup.get('aboutImage').setValue(imageData);
      };
   
    }
  }
}
