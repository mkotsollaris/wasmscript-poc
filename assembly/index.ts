// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function fib(n: i32): i32 {
  if (n == 0 || n == 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

export function stringConcat(a: string, b: string): string {
  return a + b;
}
