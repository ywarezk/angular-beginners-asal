import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
          <!-- <div class="w-100 pr-3 pl-3 flexbox-container header d-flex justify-content-betwen align-items-center"> -->
              <mat-toolbar color="primary">
                  <mat-toolbar-row>
                    <button mat-icon-button>
                      <mat-icon >menu</mat-icon>
                    </button>
                    <h1>Simple Login App</h1>
                    <span class="menu-spacer"></span>
                    <div>
                      <a mat-button > About </a>
                      <a mat-button > Services </a>
                      <a mat-button > Contacts </a>
                      <a mat-button > Portfolio </a>
                    </div>
                  </mat-toolbar-row>

                  <mat-toolbar-row>
                      <span style="font-size: 12px;">First Angular app to learn more</span>
                    </mat-toolbar-row>
                </mat-toolbar>
          <!-- </div> -->
      </nav>
  </div>

  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
