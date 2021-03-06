import { Injectable } from '@angular/core';
import {Task} from '../shared/task' ;
import {Tasks} from '../shared/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return Tasks;
  }

  getTaskIDS() {
    return Tasks.map(a => a.id);
  }

  getTask(id: string) {
    return Tasks.find(a => a.id === id)
  }

  addTask(id: any, title: any,description: any) {
    let newTask = {
      id:  id,
      title: title,
      description: description,
      status: 'Pending'
    }
    return Tasks.push(newTask)
  }

  deleteTask(item:any) {
    return Tasks.splice(Tasks.indexOf(item), 1)
  }

  getTaskLength() {
    return Tasks.length;
  }

  checkTask(item: any) {
    let updatedTask = {
      id:  item.id,
      title: item.title,
      description: item.description,
      status: 'Completed'
    }
    return Tasks.splice(Tasks.indexOf(item), 1), Tasks.push(updatedTask)
    return Tasks.push(updatedTask)

    //return Tasks[id] = updatedTask;
  }

  uncheckTask(item: any) {
    let updatedTask = {
      id:  item.id,
      title: item.title,
      description: item.description,
      status: 'Pending'
    }
    return Tasks.splice(Tasks.indexOf(item), 1), Tasks.push(updatedTask)
  }

}
