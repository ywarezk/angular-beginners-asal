import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'userTodo'
})
export class UserTodoPipe implements PipeTransform {


  transform(user: User | null, msg: string, age: number): unknown {
    if (!user) return ``;
    return `${msg} ${user.firstName} ${user.lastName} my age is: ${age} num of todo tasks are ${32}`
  }

}
