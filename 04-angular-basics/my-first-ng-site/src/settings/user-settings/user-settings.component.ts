import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-settings',
  template: `
    <p>
      user-settings works! {{ name }}
    </p>
  `,
  styleUrls: ['./user-settings.component.css'],
  /*
  providers: [
    UserService
  ]
  */
})
export class UserSettingsComponent implements OnInit {
  name = ''

  constructor(
    private _userService: UserService
  ) {

    // const http = new HttpClient()
    // const user = new UserService();

  }

  ngOnInit(): void {
    this.name = `${this._userService.firstName} ${this._userService.lastName}`;
  }

}
