// Zadatak n2:

// Napravi funkciju koja vraca funkciju koja ispisuje sledeci fibonacijev broj.

// var fib = fibonaccif(0,1);
// fib(); // 0
// fib(); // 1
// fib(); // 1
// fib(); // 2
// fib(); // 3
// fib(); // 5
// fib(); // 8
// ...

function fibonaccif(a, b) {
  function nextFibonacci() {
    let current = a;
    [a, b] = [b, a + b];
    return current;
  }
  return nextFibonacci;
}

var fib = fibonaccif(0, 1);

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
