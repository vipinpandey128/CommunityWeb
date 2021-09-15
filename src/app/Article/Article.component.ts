import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { ArticleService } from './service/Article.service';

@Component({
  selector: 'app-Article',
  templateUrl: './Article.component.html',
  styleUrls: ['./Article.component.css']
})
export class ArticleComponent implements OnInit {
  articleForm: FormGroup;
  ArticleTitle:string='';  
  ArticleDescription:string='';  
  IsActive:boolean=true;
  constructor(public fb: FormBuilder, private articleService:ArticleService) { }

  ngOnInit() {
    this.reactiveForm();
  }


  /* Reactive form */
  reactiveForm() {
    this.articleForm = this.fb.group({
      ArticleTitle: [null, Validators.required],
      ArticleDescription: [null, Validators.required],
      IsActive: [null, Validators.required]
    });
  }

  submitForm() {
    console.log(this.articleForm.value)
    this.articleService.SaveArticle(this.articleForm.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved SuccesFully!!!");
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
}
