import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment } from '@angular/router';

@Injectable()
export class IsLoggedInService implements CanActivate {
  canActivate() {
    return !!localStorage.getItem('token');
  }
}
