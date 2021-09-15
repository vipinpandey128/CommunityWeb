import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Side-Nav',
  templateUrl: './Side-Nav.component.html',
  styleUrls: ['./Side-Nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();
  
    constructor() { }
  
     onToggleClose() {
      this.closeSideNav.emit();
  }
  
    ngOnInit() {
    }
  
  }