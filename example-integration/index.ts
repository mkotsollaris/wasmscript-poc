import { Export } from "..";

console.log('Hello World!');
const myModule: Export = require("../index");

const res = myModule.add(5, 6);

//@ts-ignore
function addJS(a, b) {
    return a + b;
}

console.time('addJS');
addJS(5, 6);
console.timeEnd('addJS');

console.time('myModule.add');
myModule.add(5, 6);
console.timeEnd('myModule.add');
