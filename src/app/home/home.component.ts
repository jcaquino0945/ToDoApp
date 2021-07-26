import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../shared/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  task$!: Task[];
  title: any;
  description: any;
  id!: any;
  dateToday = Date.now()
  constructor(
    public taskService: TaskService,
    ) { }

  ngOnInit(): void {
    this.task$ = this.taskService.getTasks()
    console.log(this.task$)
    this.task$.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0))
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

}
