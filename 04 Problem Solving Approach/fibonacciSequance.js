const fibonacci = (n) => {
  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }
  return fibonacciSequence;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(15));
