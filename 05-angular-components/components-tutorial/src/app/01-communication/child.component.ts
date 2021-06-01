import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  template: `
    <h1>
      Hello {{ name }} {{ age }} {{ commService.message2 | async }}
    </h1>
    <button (click)="sendHelloToParent()">
      Say Hello To Parent
    </button>
  `,
})
export class ChildComponent implements OnInit {

  @Input('personName')
  name = 'Yariv';

  @Input()
  age = 36;

  // hello world
  @Output()
  hello: EventEmitter<string> = new EventEmitter();

  constructor(
    public commService: CommunicationService
  ) { }

  ngOnInit(): void { }

  sendHelloToParent() {
    // to send hello world to the parent component
    this.hello.emit('hello world');

    this.commService.message2.next('new value');
  }
}
