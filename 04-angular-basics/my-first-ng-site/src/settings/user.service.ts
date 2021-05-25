import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firstName = 'Yariv';
  lastName =  'Katz';

  constructor(private _http: HttpClient) { }
}
