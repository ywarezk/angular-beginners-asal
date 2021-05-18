

const myStringArr: string[] = [];
myStringArr.push('only strings allows');
// ERROR
// myStringArr.push(14);

const myStringOrNumbersArr: Array<string | number> = [];
myStringOrNumbersArr.push('hello')
myStringOrNumbersArr.push(14);
// ERROR
// myStringOrNumbersArr.push(true);

const myObj: {[key: string]: number} = {};
myObj['hello'] = 14;

// Error
// myObj['foo'] = true;