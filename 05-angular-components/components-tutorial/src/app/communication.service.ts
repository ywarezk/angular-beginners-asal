import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  message = 'hello world';

  message2 = new BehaviorSubject('hello world2');

  constructor() { }
}
