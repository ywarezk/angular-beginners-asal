"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// ----O----O----O----O----O---->
// ----O----O----O----O----O---->
// ----O----O----O----O----O--|-->
// ----O--|--------------------->
setInterval(function () {
    console.log('hello interval');
}, 1000);
var intervalObservable = new rxjs_1.Observable(function (observer) {
    // your async code will be placed here
    setInterval(function () {
        observer.next('hello world');
    }, 1000);
});
var subscription = intervalObservable.subscribe(function (msg) {
    console.log(msg);
});
// subscription.unsubscribe();
intervalObservable.subscribe(function (msg) {
    console.log(msg);
});
/**

// Observable
httpClient.get('https://some-url').subscribe()

 */
var timerObservable = new rxjs_1.Observable(function (observer) {
    setTimeout(function () {
        observer.next('this will be sent once');
        observer.complete();
    }, 1000);
});
timerObservable.subscribe(
// () => {
// },
// null,
// () => {
// 	console.log('observable is now closed')
// }
{
    next: function () {
    },
    complete: function () {
    }
});
//# sourceMappingURL=04-observable-example.js.map