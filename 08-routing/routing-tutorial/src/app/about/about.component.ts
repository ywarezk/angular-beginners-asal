import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 *

 ----user------user------user----------->

 */

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works! {{ user$ | async }} {{ hello$ | async }}
    </p>
    <button (click)="navigateToHome()">
      navigate by event and not by links
    </button>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user$: Observable<string | null>
  hello$: Observable<string | null>

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // ----params-----params-----params---------->
    // ----user-------user---------user
    this.user$ = this._activatedRoute.paramMap.pipe(
      map(params => params.get('user'))
    );

    this.hello$ = this._activatedRoute.queryParamMap.pipe(
      map(params => params.get('hello'))
    )

    // .subscribe((params) => {
    //   const user = params.get('user');
    // })
  }

  navigateToHome() {
    this._router.navigateByUrl('/');
  }
}
