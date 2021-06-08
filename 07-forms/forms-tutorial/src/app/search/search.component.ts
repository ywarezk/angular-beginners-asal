import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  template: `
    <form>
      <input type="search" placeholder="search for todo" />
    </form>
    <ul>
      <li>
      </li>
    </ul>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.sendSearchRequest().subscribe((tasks) => {

    });
  }

  sendSearchRequest(search = '') {
    return this._http.get(`http://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`);
  }

}
