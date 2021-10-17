import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';
import { ArticleViewModel } from '../Article/Models/Article';
import { Youtube } from './models/youtube';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent  implements OnInit {
  youtubeFrom: FormGroup;
  youtubeVideoURL:string='';  
  youtubeAuthor:string='';
  youtubeVideoTitle:string='';  
  isActive:boolean=true;
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['youtubeVideoId', 'youtubeVideoTitle','youtubeAuthor','youtubeVideoURL','isActive','createdDate','EditAction','DeleteAction'];
  dataSource: any;
  errorMessage: any;
  offset: any;
  constructor(public fb: FormBuilder, private youtubeService:YoutubeService) { }

  ngOnInit() {
    this.reactiveForm();
    this.showAllYoutube();
  }

  showAllYoutube()
  {
    this.youtubeService.GetAllYoutubes().subscribe(
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
    this.youtubeFrom = this.fb.group({
      youtubeVideoTitle: [null, Validators.required],
      youtubeVideoURL: [null, Validators.required],
      youtubeAuthor: [null, Validators.required],
      isActive: [null]
    });
  }

  submitForm() {
    this.youtubeService.SaveYoutube(this.youtubeFrom.value).subscribe(data=>{
      if(data.isSuccessStatusCode)
      {
        alert("Data Saved Successfully!!!");
        this.showAllYoutube();
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