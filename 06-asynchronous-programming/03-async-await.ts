/**


async - await
syntax sugercoat for dealing with promises

 */
 
 
const myFirstPromise1: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('hello world');
	}, 1000);
});

const myFirstPromise2: Promise<number> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(36);
	}, 2000);
});

/**
 * -----O-|------------>
 * @returns Promise<number>
 */ 
async function myAge(): Promise<number> {
	const helloWorld = await myFirstPromise1;
	const age = await myFirstPromise2;
	console.log('this will run after helloWorld, age are populated');
	return 36;
}

myAge().then((thirtySix: number) => {
	
})