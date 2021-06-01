import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule } from '@angular/material/list';
import { AsalCommonModule } from 'src/asal-common/asal-common.module';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    AsalCommonModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
