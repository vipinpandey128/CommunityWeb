import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {

  @Output() SideNavToggle = new EventEmitter();  
 
   openSidenav() {
    this.SideNavToggle.emit();
 }
 
 }