import { Export } from "..";

console.log('Hello World!');
const myModule: Export = require("../index");

const res = myModule.add(5, 6);

// @ts-ignore
function addJS(a, b) {
    return a + b;
}

// @ts-ignore
function fibJs(n: number) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return fibJs(n - 1) + fibJs(n - 2)
}

console.time('addJS');
addJS(5, 6);
console.timeEnd('addJS');

console.time('myModule.add');
myModule.add(5, 6);
console.timeEnd('myModule.add');

console.time('fibJs')
fibJs(20);
console.timeEnd('fibJs')

console.time('myModule.fib')
myModule.fib(20);
console.timeEnd('myModule.fib')
