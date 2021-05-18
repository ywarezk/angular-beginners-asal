import { Component } from '@angular/core';

// component
// ui block in our screen
// <app-root>

// <asal-header></asal-header>
// <asal-link-box></asal-link-box>
// <asal-link-box></asal-link-box>
// <asal-link-box></asal-link-box>

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-ng-site';
}
