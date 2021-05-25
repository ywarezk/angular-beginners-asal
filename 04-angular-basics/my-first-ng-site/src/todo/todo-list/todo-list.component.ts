import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        {{ task.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any = [];

  constructor(
    private _taskService: TaskService
  ) { }

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasksJson) => {
      this.tasks = tasksJson;
    })
  }

}
