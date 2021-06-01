import { Component, OnInit, ViewChild } from '@angular/core';
import { LifecycleComponent } from '../03-component-lifecycle/lifecycle.component';

@Component({
  selector: 'app-grab',
  template: `
    <h1 #yarivH1 class="foo-bar"> hello world </h1>

    <p>
      {{ yarivH1.classList | json }}
    </p>

    <app-lifecycle #instanceOfComponent ></app-lifecycle>
  `,
})
export class GrabComponent  {
  @ViewChild('instanceOfComponent')
  componentInstance: LifecycleComponent
}
