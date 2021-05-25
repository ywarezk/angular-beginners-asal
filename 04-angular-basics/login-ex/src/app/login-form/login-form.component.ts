import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  template: `
    <div class="login">
      <div class="col-xlg-8">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header justify-content-center">
                  <h3 class="font-weight-light my-4">Login</h3>
              </div>
              <div class="card-body">
                  <form novalidate="" class="ng-untouched ng-pristine ng-invalid">
                      <div class="form-group"><label
                              for="inputEmailAddress" class="small mb-1">Email</label><input
                              id="inputEmailAddress" data-cy="emailInput" type="email"
                              placeholder="Enter email address" aria-describedby="emailHelp"
                              formcontrolname="email"
                              class="form-control py-4 ng-untouched ng-pristine ng-invalid">
                          <div class="invalid-feedback">Email required.</div>
                          <!---->
                          <!---->
                      </div>
                      <div class="form-group"><label
                              for="inputPassword" class="small mb-1">Password</label><input
                              id="inputPassword" data-cy="passwordInput" type="password"
                              placeholder="Enter password" formcontrolname="password"
                              class="form-control py-4 ng-untouched ng-pristine ng-invalid">
                          <div  class="invalid-feedback">Password required.</div>
                          <!---->
                          <!---->
                      </div>
                      <div class="form-group">
                          <div  class="custom-control custom-checkbox"><input
                                   id="rememberPasswordCheck"
                                  data-cy="rememberPasswordCheck" type="checkbox" formcontrolname="checkbox"
                                  class="custom-control-input ng-untouched ng-pristine ng-valid"><label
                                   for="rememberPasswordCheck"
                                  class="custom-control-label">Remember password</label></div>
                      </div>
                      <div
                          class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"><a
                               routerlink="/auth/forgot-password" class="small"
                              href="/auth/forgot-password">Forgot Password?</a><button
                              data-cy="loginButton" type="submit" class="btn btn-primary"
                              disabled="">Login</button></div>
                  </form>
              </div>
              <div  class="card-footer text-center">
                  <div  class="small"><a  routerlink="/auth/register"
                          href="/auth/register">Need an account? Sign up!</a></div>
              </div>
          </div>
      </div>
  </div>
  `,
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
