
interface HasGrade {
	grade: number;
}

class Person {
	private _name = 'yariv';
	public address = 'Ramat Gan';
	protected hello = 'world'
	
	constructor(public age: number) {
		
	}
	
	sayHello(msg: string = 'hello world'): void {
		console.log(msg)
	}
}

class Student extends Person implements HasGrade {
	constructor(age: number, public grade: number) {
		super(age);	
	}
	
	sayHello() {
		super.sayHello('hello');
	}
}

const me = new Person(42);
me.sayHello()

const myGradeObject: HasGrade = { grade: 14 };

abstract class Engine {
	abstract sayHello(): void;
}

// const engine = new Engine();

class Airplane extends Engine {
	sayHello() {
		
	}
}

const airplane = new Airplane();