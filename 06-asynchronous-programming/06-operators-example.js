"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Observable<number>
// ---1----2----3----4--->
// interval(1000).subscribe((num: number) => {
// })
rxjs_1.interval(1000).pipe(operators_1.filter(function (num) {
    return num % 2 === 0;
}), operators_1.map(function (num) {
    console.log(num);
    return 'hello world';
})).subscribe(function (msg) {
    console.log(msg);
});
//# sourceMappingURL=06-operators-example.js.map