import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //all the operation here is between the service component and this 
  //that is these hands all the operation between service and the task-item component
//---------------------------------------------------------------------------------------------
  //setting the task interface variable
  tasks: Task[] =[];

  //calling the taskservice module into the constructor
  constructor(private taskService:TaskService) { }

  ngOnInit(): void { 
    //working with observables to get data from ur fake db
    this.taskService.getTasks()
    .subscribe(
      (tasks)=> (this.tasks=tasks)
    );
  }
  //this hand the interaction of the delete event to the db through the service coponent
  deleteTask(task:Task){
    //this first two line collect the observable from the service component
    this.taskService.deleteTask(task)
    .subscribe(//it works as a .then this below filter the delete item from the ui(ie. remove it)
      ()=> (this.tasks=this.tasks
        .filter((t) => t.id !== task.id))
    );
  }
  // this handes the update of reminder value from true to false ot the other way
  // which is emited from the task-item component to here then to the service component
  toggleReminder(task:Task){
    task.reminder =!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    //working with observables to push data to the fake db
    this.taskService.addTask(task)//calling the addtask method 
    .subscribe(
      (task)=> (this.tasks.push(task))
    );
  }

}