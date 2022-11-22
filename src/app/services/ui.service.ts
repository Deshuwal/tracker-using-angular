import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  //handling initialization of variables for add-item component toggling
  private showAddTask: boolean =false;
  private subject =new Subject <any>();

  constructor() { }

  // this set the any component with show-add-task  property (add-item component) to visiable
  toggleAddTask():void {
    this.showAddTask =!this.showAddTask;
    this.subject.next(this.showAddTask); 
  }
  // when we toggle the the show-add-task property we (add-item component) do this
 onToggle():Observable<any>{
  return this.subject.asObservable();
 } 
}
