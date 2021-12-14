import { Export } from "..";

console.log('Hello World!');
const myModule: Export = require("../index");

const res = myModule.add(5, 6);

//@ts-ignore
function addJS(a, b) {
    return a + b;
}

function stringConcat(a: string, b: string) {
    return a + b;
}

console.time('addJS');
addJS(5, 6);
console.timeEnd('addJS');

console.time('myModule.add');
myModule.add(5, 6);
console.timeEnd('myModule.add');

console.time('stringConcat');
stringConcat('Hello', ' World!');
console.timeEnd('stringConcat');

console.time('myModule.stringConcat');
myModule.stringConcat('Hello', ' World!');
console.timeEnd('myModule.stringConcat');