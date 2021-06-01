import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getTodoTasks() {
    return this._http.get(
      'https://nztodo.herokuapp.com/api/tasks/?format=json'
    )
  }
}
