/**

operator is a function () => {}

1. creating operators

(args2) => Observable

2. transforming operators

(args, oldObservable) => newObservable

-----O----O-----O----------->

		operator
		
-----1----------1-------------->

 */
 
import { interval, from } from 'rxjs';
import { map, filter, catchError, mergeMap, mergeAll }  from 'rxjs/operators';

// Observable<number>
// ---1----2----3----4--->
// interval(1000).subscribe((num: number) => {
	
// })

interval(1000).pipe(
	filter((num) => {
		return num % 2 === 0;
	}),
	map((num: number) => {
		console.log(num);
		return 'hello world';
	})
).subscribe((msg) => {
	console.log(msg);
});



