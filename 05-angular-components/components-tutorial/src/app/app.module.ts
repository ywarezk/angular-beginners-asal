import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './01-communication/child.component';
import { NameComponent } from './02-pipe-example/name.component';
import { LifecycleComponent } from './03-component-lifecycle/lifecycle.component';
import { CommonDirectivesComponent } from './04-common-directives/common-directives.component';
import { GrabComponent } from './05-grab-from-template/grab.component';

import { AppComponent } from './app.component';
import { UserTodoPipe } from './user-todo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NameComponent,
    UserTodoPipe,
    LifecycleComponent,
    CommonDirectivesComponent,
    GrabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    // CommonModule
  ],
  providers: [
    UserTodoPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
