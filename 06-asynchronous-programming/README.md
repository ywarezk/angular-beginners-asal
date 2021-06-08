# Asynchronous programming in Javascript (using Typescript)

## Javascript Characteristics

- single threaded*
- non-blocking
- we will have to pass callback for different tasks
  - ajax (requests) for a server
  - events
  - timers

## chrome/node.js architecture

- V8 - main thread, callstack, heap, garbage collector
- C++ bindings
- C - libuv - I/O, Event loop
  
## What is async programming

- stuff that will happen in the future
- in javascript usually pass a callback

## Bad patterns of async code

```typescript

// callback hell
sendHttpRequest((response) => {
	
	anotherAsyncRequest(response, (someData) => {
		
		anotherAsync3(some, () => {
			
		})
		
	})
	
});

// parrallel

someAsync(() => {
	
	
	
})

anotherAsync(() => {
	
})

```

## EX.

- experiment with `Observable` and these operators:
  - map
  - filter
  - catchError
  - mergeMap
  - mergeAll
  - concat
  - of
  - from
  
- try to transform observable to promise
- try to transform promise to observable
- when can an observable be transformed to a promise?
- what happens if we try to do the transformation on an observable we can't?