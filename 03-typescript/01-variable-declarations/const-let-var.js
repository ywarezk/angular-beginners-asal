
// how to declare variable in javascript and typescript

var hello = 'world';
let myNumber = 42;
const myBoolean = true;

// what is the difference between var, let, const?

const anotherVar = 'something';

anotherVar = 14; 

// scope

if (true) {
	let foo = 'bar';
	const bar = [1,2,3];
	bar.push(4);
}

// only in the block
console.log(foo);

function sayHello() {
	var message = 'world'
	
	if (true) {
		var message = 'hello'
	}
	console.log(message);
}

var message = 'world';

/**
              scope               number of assignments

var         functional                     infinite

let             {}     					   infinite

const           {}      					   1



 */