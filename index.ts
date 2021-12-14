export interface Export {
    add: (a: number, b: number) => number;
    fib: (n: number) => number;
    stringConcat: (a: string, b: string) => string;
}

const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
const exportObj: Export = wasmModule.exports;
module.exports = exportObj;