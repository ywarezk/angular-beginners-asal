import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//           -----L------L------L-----L---------> Request
// Response <---------RL-----RL----------------------

@Component({
  selector: 'app-todo-list',
  template: `
    <p>
      todo-list works!
    </p>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('https://academeez-login-ex.herokuapp.com/api/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

}
