function cashFunc(fn) {
  let cash = {};

  return function (n) {
    if (cash[n]) {
      return cash[m];
    }
    let result = fn(n);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  if (n <= 1) {
    return n;
  }

  return n * factorial(n - 1);
}

let cashFactorial = cashFunc(factorial);

console.log(cashFactorial(6));
console.log(cashFactorial(5));
console.log(cashFactorial(4));
console.log(cashFactorial(2));
console.log(cashFactorial(6));
console.log(cashFactorial(5));
console.log(cashFactorial(4));
