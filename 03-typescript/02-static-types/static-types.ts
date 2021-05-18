/**

define static types of variable

 */
 
let myStr: string = 'hello';
// error!
// myStr = 14;

let myNumber = 14;
// error
// myNumber = 'hello';


const myBoolean: boolean = true;

let canBeAnything: any = 10

let myNumber2: number | string | boolean = 14;
myNumber2 = 'hello world';