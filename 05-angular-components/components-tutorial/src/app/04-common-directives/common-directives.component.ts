import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-directives',
  template: `
    <h1>
      Angular ships with a few directives that you can use
    </h1>

    <h2>
      *ngIf
    </h2>

    <p *ngIf="user">
      Based on some condition we will place a dom element or component in our view
    </p>

    <h2>
      *ngFor
    </h2>

    <ul>
      <li *ngFor="let someTask of todoTasks">
        {{ someTask }}
      </li>
    </ul>

    <h2 [ngClass]="{displayThis: true}" >
      ngClass
    </h2>

    <h2 [ngStyle]="{'max-width.px': widthExp}">
      ngStyle
    </h2>
  `,
})
export class CommonDirectivesComponent {
  todoTasks = [
    'hello',
    'world',
    'foo',
    'bar'
  ]

  someCondition = true;

  widthExp = 100;

  user = {
    firstName: 'yariv',
    lastName: 'katz'
  }
}
