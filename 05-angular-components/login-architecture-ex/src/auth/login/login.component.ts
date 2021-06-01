import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
        <div class="col-xlg-8">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header justify-content-center">
                    <h2 class="font-weight-light my-4">Login</h2>
                </div>
                <div class="card-body">
                    <form novalidate="" class="ng-untouched ng-pristine ng-invalid" (submit)="onSubmit()">

                        <div class="form-group">
                            <div class="example-container">
                                <mat-form-field appearance="fill">
                                    <mat-label>Enter your email</mat-label>
                                    <input
                                        matInput placeholder="pat@example.com"
                                        (input)="userTypedEmail($event)" class="font-weight-light my-1">
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="form-group">

                            <div class="example-container">
                                <mat-form-field appearance="fill">
                                    <mat-label>Enter your password</mat-label>
                                    <input
                                        matInput
                                        (input)="userTypedPassword($event)"
                                        required>
                                </mat-form-field>
                            </div>

                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox"><input id="rememberPasswordCheck"
                                    data-cy="rememberPasswordCheck" type="checkbox" formcontrolname="checkbox"
                                    class="custom-control-input ng-untouched ng-pristine ng-valid"><label
                                    for="rememberPasswordCheck" class="custom-control-label">Remember password</label></div>
                        </div>
                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"><a
                                routerlink="/auth/forgot-password" class="small" href="/auth/forgot-password">Forgot
                                Password?</a>

                          <button
                            data-cy="loginButton" type="submit" mat-raised-button color="primary">Login</button></div>
                    </form>
                </div>
                <div class="card-footer text-center">
                    <div class="small"><a routerlink="/auth/register" href="/auth/register">Need an account? Sign up!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _email: string = '';
  private _password: string = '';

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  userTypedEmail(event: any) {
    this._email = event.target.value;
  }

  userTypedPassword(event: any) {
    this._password = event.target.value;
  }

  /**
   * send the email and password to a server
   */
  onSubmit() {
    this._authService.login(this._email, this._password).subscribe(
      (token) => {
        console.log(token);
      }
    );
  }

}
