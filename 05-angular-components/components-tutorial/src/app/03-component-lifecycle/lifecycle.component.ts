/**

https://angular.io/guide/lifecycle-hooks
Component having a lifecycle
lifecycle means soemthing happened in your component
- born
- updated
- destroy

 */

import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  template: `
    <h1>
      Component has lifecycle
    </h1>

    <h2 (click)="doSomething()">
      Component is being born
    </h2>

    <h2>
      Component is being destroyed
    </h2>

    <p>
      {{ counter }}
    </p>
   `,
  styles: [``]
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  age = 36;


  name = '';

  counter = 0;

  private _intervalId: any= null;

  private _sub: Subscription;

  // do not place server calls here
  // 1. this is first
  constructor(
    private _router: Router
  ) {
    this.name = 'yariv katz'
  }

  /**
   * called 2nd
   * many times - when the input properties are changed
   * logic that needs to happen when the input is changing
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {

  }



  /**
   * will be called once when the component is born
   * initialization stuff
   * - grabbing data from the server
   *
   * How many times will this lifecycle be called? 1
   * When it is called? when the component is born
   * What kind of logic should i place in this lifecycle? complex initialization
   * 3rd
   */
  ngOnInit(): void {
    this._intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    this._sub = this._router.events.subscribe(() => {
      // this will be called infinite
    })
  }

  /**
   * called once
   * when the component is about to get destroyed
   * cleaning logic
   */
  ngOnDestroy() {
    console.log('ngOnDestroy');
    clearInterval(this._intervalId);
    this._sub.unsubscribe();
  }

  doSomething() {

  }
}
