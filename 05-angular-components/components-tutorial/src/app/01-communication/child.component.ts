import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>
      Hello {{ name }} {{ age }}
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

  constructor() { }

  ngOnInit(): void { }

  sendHelloToParent() {
    // to send hello world to the parent component
    this.hello.emit('hello world');
  }
}
