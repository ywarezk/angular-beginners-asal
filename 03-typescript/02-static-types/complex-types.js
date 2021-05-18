"use strict";
var myStringArr = [];
myStringArr.push('only strings allows');
// ERROR
// myStringArr.push(14);
var myStringOrNumbersArr = [];
myStringOrNumbersArr.push('hello');
myStringOrNumbersArr.push(14);
// ERROR
// myStringOrNumbersArr.push(true);
var myObj = {};
myObj['hello'] = 14;
// Error
// myObj['foo'] = true;
//# sourceMappingURL=complex-types.js.map