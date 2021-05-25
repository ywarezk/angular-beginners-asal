import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  /**
   * Send a request to our rest server
   * https://nztodo.herokuapp.com/api/tasks/?format=json
   */
  getTasks() {
    return this._http
      .get('https://nztodo.herokuapp.com/api/tasks/?format=json');

    // this._http.post('https://academeez-login-ex.herokuapp.com/api/users/login', {email: 'usertyped@email.com', 'password': ''})
  }
}
