"use strict";
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
var myFirstPromise = new Promise(function (resolve, reject) {
    // you place a callback in the constructor with your async code
    // inside that callback
    setTimeout(function () {
        // console.log('hello world');
        resolve('hello world');
        // resolve(36);
        // resolve('foo bar');
        // reject(new Error('describe the error that happened'))
    }, 1000);
});
myFirstPromise.then(function (msg) {
    console.log(msg);
}, function (err) {
    console.log('something happened: ' + err.message);
});
myFirstPromise.then(function (msg) {
    console.log(msg);
}, function (err) {
    console.log('something happened: ' + err.message);
});
//# sourceMappingURL=promise-example.js.map