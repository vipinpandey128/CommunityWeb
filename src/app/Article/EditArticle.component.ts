import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleSaveModel } from './Models/Article';
import { ArticleService } from './service/Article.service';

@Component({
  selector: 'app-EditArticle',
  templateUrl: './EditArticle.component.html',
  styleUrls: ['./EditArticle.component.css']
})
export class EditArticleComponent implements OnInit {
  articleForm: FormGroup;
  articleTitle:string='';  
  articleDescription:string='';  
  articleModel: ArticleSaveModel = new ArticleSaveModel();
  isActive:boolean=true;
  constructor(public fb: FormBuilder, private _routeParams: ActivatedRoute,
    private articleService:ArticleService, private route:Router) { }

  ngOnInit() {
    let id = this._routeParams.snapshot.params['ArticleId'];
    this.articleService.GetArticleByID(id).subscribe(data=>{
      this.articleModel = data;
    });
    this.reactiveForm();
  }
  reactiveForm() {
    this.articleForm = this.fb.group({
      articleTitle: [null, Validators.required],
      articleDescription: [null, Validators.required],
      isActive: [null, Validators.required]
    });
  }
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.isActive = true;  
    } else {  
      this.isActive = false;  
    }  
  }  

  onSubmit() {
    this.articleService.UpdateArticle(this.articleModel).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Updated Successfully!!!");
        this.route.navigate(['/Article/Add']);
      }
    })
  }
  onFileSelect(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        
        let imageData = reader.result as string;
        this.articleModel.image = imageData;
      };
   
    }
  }

}
