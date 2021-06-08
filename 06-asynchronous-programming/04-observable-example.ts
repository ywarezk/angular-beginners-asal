import { Observable } from 'rxjs';


// ----O----O----O----O----O---->


// ----O----O----O----O----O---->


// ----O----O----O----O----O--|-->
// ----O--|--------------------->
setInterval(() => {
	console.log('hello interval');
}, 1000);

const intervalObservable: Observable<string> = new Observable((observer) => {
	
	// your async code will be placed here
	
	setInterval(() => {
		observer.next('hello world');
	}, 1000);
	
	
});

const subscription = intervalObservable.subscribe(
	(msg) => {
		console.log(msg)
	}
)

// subscription.unsubscribe();

intervalObservable.subscribe(
	(msg) => {
		console.log(msg)
	}
)

/**

// Observable
httpClient.get('https://some-url').subscribe()

 */

const timerObservable = new Observable((observer) => {
	
	
	setTimeout(() => {
		observer.next('this will be sent once');
		observer.complete();
	}, 1000)
	
})

timerObservable.subscribe(
	// () => {
	
	// },
	// null,
	// () => {
	// 	console.log('observable is now closed')
	// }
	
	{
		next: () => {
			
		},
		complete: () => {
			
		}
	}
)