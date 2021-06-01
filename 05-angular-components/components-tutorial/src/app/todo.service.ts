import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getTasks(): Observable<any> {
    return this._http.get<any>('https://nztodo.herokuapp.com/api/tasks/?format=json');
  }
}
