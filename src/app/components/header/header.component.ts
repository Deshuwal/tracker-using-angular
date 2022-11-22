import {Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   // the header title tag
   title = 'Task Tracker';

   showAddTask!: boolean;
   subscription!: Subscription;

  constructor(private uiService:UiService, private router :Router) { 
    this.subscription =this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask =value));
      }

  ngOnInit(): void {}

  //adding button toggling functionality
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
  //setting the route component to only work on a specific page
  hasRoute(route:string){
    return this.router.url === route;
  }
}
