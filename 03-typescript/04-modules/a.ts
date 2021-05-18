import { Component, Input } from '@angular/core';

export function sayHello() {
	console.log('hello world');
}

@Component({
	template: ''
})
export class Person {
	@Input()
	myName: string = 'hello';
}

export const hello = 'hello world'