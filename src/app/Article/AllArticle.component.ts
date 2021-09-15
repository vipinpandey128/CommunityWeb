import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { ArticleViewModel } from './Models/Article';
import { ArticleService } from './service/Article.service';

@Component({
  selector: 'app-AllArticle',
  templateUrl: './AllArticle.component.html',
  styleUrls: ['./AllArticle.component.css']
})
export class AllArticleComponent implements OnInit {
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['articleTitle', 'articleDescription','isActive','createdDate','EditAction','DeleteAction'];
  dataSource: any;
  AssignModel : ArticleViewModel[]
  errorMessage: any;
  offset: any;

  constructor(private _Route: Router, private articleService:ArticleService) {
}

  ngOnInit(): void {
    this.articleService.GetAllArticles().subscribe(
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

Delete(id:number)
{

}

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  getNext(event: PageEvent) {
    this.offset = event.pageSize * event.pageIndex
    // call your api function here with the offset
    console.log(event.pageSize);
    console.log(event.pageIndex);
  }
  DeleteArticle(articleId)
  {

  }
}
