import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
