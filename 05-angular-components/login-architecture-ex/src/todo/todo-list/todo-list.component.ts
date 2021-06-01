import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <mat-selection-list #tasksList>
      <mat-list-option *ngFor="let task of tasks">
            {{task.title}}
      </mat-list-option>
    </mat-selection-list>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any = []

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit(): void {
    this._todoService.getTodoTasks().subscribe((todoTasksFromTheServer) => {
      this.tasks = todoTasksFromTheServer;
    })
  }

}
