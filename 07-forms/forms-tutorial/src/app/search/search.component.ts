import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mergeMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';


/**
 *

 ---o-----o-----o-----o-------->

 */

@Component({
  selector: 'app-search',
  template: `
    <form [formGroup]="searchForm">
      <input
	  	  formControlName="search"
	  	  type="search"
		placeholder="search for todo"
	/>
    </form>
    <ul>
      <li *ngFor="let item of (todoList$ | async)">
        {{ item.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /*
  FormControl
  FormArray
  FormGroup
  */
  searchForm: FormGroup = this._formBuilder.group({
    search: ''
  });

  todoList$: Observable<any>;

  constructor(private _http: HttpClient, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    const searchFormControl = this.searchForm.get('search');

    // ----S-----S-----S----S-------S---S---S---S-->
    // --------------------------S----------------------->
    //---------------------------S---S---S---S---S>
    // --------------------------R--->
    // -----------------------------------TodoList------>
    this.todoList$ = searchFormControl?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(searchString => this._http.get(`https://nztodo.herokuapp.com/api/tasks/?format=json&search=${searchString}`))
    );

    /*
    .subscribe()
    */


  }



}
