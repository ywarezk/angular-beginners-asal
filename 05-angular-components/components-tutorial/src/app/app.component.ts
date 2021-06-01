import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'components-tutorial';

  someCondition = true;

  constructor(public commService: CommunicationService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.someCondition = false;
    }, 3000);
  }

  calculateName() {
    return 'Sweetness';
  }

  logHello(msg: string) {
    console.log(msg);
  }
}
