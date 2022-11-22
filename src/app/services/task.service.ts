import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Task} from '../Task'
// import {TASKS} from '../mock-test'

//setting up the http header options
const httpOptions ={
  Headers: new HttpHeaders({
    'content-type':'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // adding api (url) property to the service component   
  private apiUrl ='http://localhost:5100/tasks'
    
  constructor(private http:HttpClient) { }

  // //dealing with the service without observables
  // getTasks(): Task[]{//this method is assign with the interface task 
  //   return TASKS;
  // }
  // // this deal with assume observables within an array db
  // getTasks(): Observable<Task[]>{
  //   const tasks =of(TASKS);
  //   return tasks;
  // }

  // now working with backend api 
  //data not within program array file
  getTasks(): Observable<Task[]>{
  return this.http.get<Task[]>(this.apiUrl);
 }

  //this method has a return type of observables and also hand the interaction of the delete event to the db
  deleteTask(task:Task):Observable<Task>{
    //first have the task id so a to carry the delete operation
    const url = `${this.apiUrl}/${task.id}`;
    //carryout our request that will return an observables
    return this.http.delete<Task>(url);
  }

  //updating the task reminder which interract with the db
  updateTaskReminder(task:Task):Observable<Task>{
    //setting the contain id
    const url =`${this.apiUrl}/${task.id}`;
    //returnning observables
    //return this.http.put<Task>(url, task, httpOptions);
    return this.http.put<Task>(url, task);
  }

  // passing a request to the server via the observables 
  addTask(task:Task):Observable<Task>{
    // return this.http.post<Task>(this.apiUrl, task, httpOptions);
    return this.http.post<Task>(this.apiUrl, task);
  }




}
