import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { from } from 'rxjs';
import { ArticleViewModel } from './Models/Article';
import { ArticleService } from './service/Article.service';

@Component({
  selector: 'app-Article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.css']
})
export class ArticleComponent implements OnInit {
  articleForm: FormGroup;
  ArticleTitle:string='';
  //Type:string='';  
  articleType: any = [
    { value: 'Popular Article', viewValue: 'Popular Article' },
    { value: 'Normal Article', viewValue: 'Normal Article' },
  ];
  ArticleDescription:string='';  
  IsActive:boolean=true;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['articleTitle', 'articleDescription','type','image','isActive','createdDate','EditAction','DeleteAction'];
  dataSource: any;
  AssignModel : ArticleViewModel[]
  errorMessage: any;
  offset: any;

  constructor(public fb: FormBuilder, private articleService:ArticleService) { }

  ngOnInit() {
    this.reactiveForm();
    this.showAllArticles();
  }

  showAllArticles()
  {
    this.articleService.GetAllArticles().subscribe(
      assignModel => 
      {
          this.dataSource = new MatTableDataSource(assignModel);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      },
      error => this.errorMessage = <any>error
  );
  }


  /* Reactive form */
  reactiveForm() {
    this.articleForm = this.fb.group({
      ArticleTitle: [null, Validators.required],
      ArticleDescription: [null, Validators.required],
      Type: [null,Validators.required],
      image: [null],
      IsActive: [null, Validators.required]
    });
  }

  submitForm() {
    this.articleService.SaveArticle(this.articleForm.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllArticles();
      }
      else
      {
        alert("Invalid Data!!!");
      }
    })
  }
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsActive = true;  
    } else {  
      this.IsActive = false;  
    }  
  }  

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  getNext(event: PageEvent) {
    this.offset = event.pageSize * event.pageIndex
    // call your api function here with the offset
  
  }
  DeleteArticle(articleId)
  {
    this.articleService.DeleteArticle(articleId).subscribe(data => {
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllArticles();
      }
      else
      {
        alert("Invalid Data!!!");
      }
    });
  }
  onFileSelect(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        let imageData = reader.result as string;
        this.articleForm.get('image').setValue(imageData);
      };
   
    }
  }
  
  
}
