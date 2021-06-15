import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input type="email" placeholder="Type your mail" formControlName="email" />
      <input type="password" placeholder="Type your password" formControlName="password" />
      <button type="submit" [disabled]=loginForm.invalid>
        Login
      </button>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(3)] ]
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) return;

    // {token}
    this._authService.login(this.loginForm.value).subscribe((tokenObj: any) => {
      localStorage.setItem('token', tokenObj.token);
    })
  }

}
