import { Component } from '@angular/core';
import { UserService } from 'src/settings/user.service';

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
  constructor(private _userService: UserService) {}

  title = 'my-first-ng-site';
}
