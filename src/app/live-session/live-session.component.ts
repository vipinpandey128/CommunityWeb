import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { ArticleViewModel } from '../Article/Models/Article';
import { YoutubeService } from '../youtube-video/services/youtube.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.css']
})
export class LiveSessionComponent  implements OnInit {
  liveSessionFrom: FormGroup;
  youtubeVideoURL:string='';  
  youtubeAuthor:string='';
  youtubeVideoTitle:string='';  
  isActive:boolean=true;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['liveSessionId', 'title','organisor','guest','dateAndTime','youtubeLink','isActive','createdDate','EditAction','DeleteAction'];
  dataSource: any;
  AssignModel : ArticleViewModel[]
  errorMessage: any;
  offset: any;
  constructor(public fb: FormBuilder, private liveSessionService:SessionService) { }

  ngOnInit() {
    this.reactiveForm();
    this.showAllArticles();
  }

  showAllArticles()
  {
    this.liveSessionService.GetAllLiveSessions().subscribe(
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


  /* Reactive form */
  reactiveForm() {
    this.liveSessionFrom = this.fb.group({
      title: [null, Validators.required],
      organisor: [null, Validators.required],
      guest: [null, Validators.required],
      dateAndTime: [null, Validators.required],
      youtubeLink: [null, Validators.required],
      isActive: [null]
    });
  }

  submitForm() {
    this.liveSessionService.SaveLiveSession(this.liveSessionFrom.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllArticles();
      }
      else{
        alert("Invalid Data!!!");
      }
    })
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

}
}