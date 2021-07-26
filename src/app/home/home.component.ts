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

    this.id = (this.taskService.getTaskLength() + 1).toString();
  }

  checkTask(id: any,title: any,description: any) {
    this.taskService.checkTask(id,title,description)
    this.task$ = this.taskService.getTasks()

    console.log(this.task$)
  }

  uncheckTask(id: any,title: any,description: any) {
    this.taskService.uncheckTask(id,title,description)
    this.task$ = this.taskService.getTasks()

    console.log(this.task$)

  }

}
