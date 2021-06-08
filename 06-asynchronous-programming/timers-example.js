"use strict";
// v8 ---> C++ 
// 
// classify your async code
// -------O-|-------------->
setTimeout(function () {
    console.log('hello world');
}, 1000);
// ----O----O----O----O----O---->
setInterval(function () {
    console.log('hello interval');
}, 1000);
// --------O-|--------------------->
// --------X------------------------>
fetch('http://our-server.com')
    .then(function () {
});
/**

1. how many times will my callback be called?
  - once
  - infinite amount of times
  - ------O-----O----O-|---------------->

2. Can my async code fail?


 */ 
//# sourceMappingURL=timers-example.js.map