import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo.service';
import { UserTodoPipe } from '../user-todo.pipe';
import { User } from '../user.model';

@Component({
  selector: 'app-name',
  template: `
    <h1>
      {{ user | userTodo:'hello world':42 }}
    </h1>

    <h2>
      Pipe examples
    </h2>

    <h3>
      date pipe
    </h3>

    <p>
      {{ now | date:'YYYY-MM-dd' }}
    </p>

    <h3>
      Json pipe
    </h3>

    <p>
      {{ user | json }}
    </p>

    <h3>
      async
    </h3>

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{task.title}}
      </li>
    </ul>

  `,
})
export class NameComponent implements OnInit {
  user: User | null = null;

  now = new Date();

  tasks$: Observable<any> = null;

  constructor(
    private _todoService: TodoService,
    private _userTodo: UserTodoPipe
  ) {}

  ngOnInit() {
    this.user = new User();
    this.user.firstName = 'Yariv';
    this.user.lastName = 'Katz';
    this.user.age = 36;

    this.tasks$ = this._todoService.getTasks();

    this._userTodo.transform(this.user, 'hello', 32);
  }
}
