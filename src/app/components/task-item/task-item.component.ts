import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // setting up the task operation by importing the task interface 
  //and declaring the task, we pass from 
 //the task component as an input here
 @Input() task!: Task;
 //hands the emission of data from ondelete event to the Tasks component where it communite with the sever
 @Output() onDeleteTask: EventEmitter<Task> =new EventEmitter();
//hands the emission of data from ddclick event to the Tasks component where it communite with the sever
@Output() onToggleReminder: EventEmitter<Task> =new EventEmitter();

  constructor() { }


   ngOnInit(): void {
  }
  //setting the delete event and emit the action to task component
  onDelete(task: any){
    this.onDeleteTask.emit(task)
  }

    //setting the double click event emission action, this emit action to task component
    onToggle(task: any){
      this.onToggleReminder.emit(task)
    }
  

}
