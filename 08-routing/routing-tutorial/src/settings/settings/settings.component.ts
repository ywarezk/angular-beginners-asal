import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div style="display: flex">

      <!-- left side navigation -->
      <div style="border: 1px solid black; margin-right: 50px;">
        <nav>
          <ul>
            <li>
              <a routerLink="/settings/account">Account</a>
            </li>
            <li>
              <a routerLink="/settings/avatar">Avatar</a>
            </li>
          </ul>

        </nav>
      </div>

      <!-- right side navigation -->
      <div>
        <router-outlet></router-outlet>
      </div>

    </div>
  `,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
