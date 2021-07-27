import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../shared/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorAdd!: boolean;
  showAdd!: boolean;
  task$!: Task[];
  title: any;
  description: any;
  id!: any;
  dateToday = Date.now()
  constructor(
    public taskService: TaskService,
    ) { }

  ngOnInit(): void {
    this.errorAdd = false;
    this.showAdd = false;
    this.title = ''
    this.description = ''
    this.task$ = this.taskService.getTasks()
    console.log(this.task$)
    this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
    this.id = (this.taskService.getTaskLength() + 1).toString();

  }

  checkTask(item:any) {
    this.taskService.checkTask(item)
    this.task$ = this.taskService.getTasks()
    this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))

    console.log(this.task$)
  }

  uncheckTask(item:any) {
    this.taskService.uncheckTask(item)
    this.task$ = this.taskService.getTasks()
    this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))

    console.log(this.task$)
  }

  deleteTask(item:any) {
    this.taskService.deleteTask(item)
    this.task$ = this.taskService.getTasks()
    this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
    this.id = (this.taskService.getTaskLength() + 1).toString();
  }
  addTask() {
    if (this.title != '' && this.description != '') {
      this.taskService.addTask(this.id,this.title,this.description);
      this.task$ = this.taskService.getTasks()
      this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
      this.title = '';
      this.description = '';
      this.id = (this.taskService.getTaskLength() + 1).toString();
      this.showAdd = false;
    }

    if (this.title == '' && this.description == '') {
      this.errorAdd = true;
    }
 
  }

  showAddPrompt() {
    this.showAdd = true;
  }

  hideAddPrompt() {
    this.showAdd = false;
  }

  
}
