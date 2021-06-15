// /auth/login

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AuthRoutingModule {}
