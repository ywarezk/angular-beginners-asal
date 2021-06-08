/**

Promise

Promise class

 */
 
// promise is good here
// ------O--|---------->
// ------X------------->

// promise is not good here
// ----O----O----O----O----O---->

// Promise states
// pending ----> Fullfilled
// pending ----> Rejected
const myFirstPromise: Promise<string> = new Promise((resolve, reject) => {
	
	// you place a callback in the constructor with your async code
	// inside that callback
	
	setTimeout(() => {
		// console.log('hello world');
		resolve('hello world');
		// resolve(36);
		// resolve('foo bar');
		// reject(new Error('describe the error that happened'))
	}, 1000);
	
});


myFirstPromise.then(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log('something happened: ' + err.message)
	}
)

myFirstPromise.then(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log('something happened: ' + err.message)
	}
)

 
