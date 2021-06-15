import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, CanLoad } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IsLoggedInService } from './is-logged-in.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // /todo
      {
        path: '',
        component: TodoListComponent,
        canActivate: [IsLoggedInService]
      }
    ]),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    IsLoggedInService
  ],
})
export class TodoRoutingModule {}
