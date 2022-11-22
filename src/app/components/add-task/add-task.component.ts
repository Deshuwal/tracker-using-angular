import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // setting new emitter option for emission to the task component with the interface as an argument
  @Output() onAddTask: EventEmitter<Task> =new EventEmitter();  

  //once working with form u have intailize the value (properties) first 
  text!: string;
  day!: string;
  reminder: boolean =false;
  showAddTask!: boolean;
  subscription : Subscription;

  constructor(private uiService:UiService) { 
    // this toggles the form when the button with hte show add task is selected
    this.subscription =this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask =value));
      }

  ngOnInit(): void { }

  onSubmit(){
    //just have quick validation for input
    if(!this.text){
      alert('Pleace add a task!!!');
      return;
    }

    // if input is true, then set the inputs component to a new task
    const newTask ={
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // after insertion is done empty the input
    this.text ='';
    this.day = '';
    this.reminder =false;

    // setting our emitter operation and passing the newtask as paremeter
    this.onAddTask.emit(newTask);


  }


}
