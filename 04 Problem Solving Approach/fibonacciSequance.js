// const fibonacci = (n) => {
//   const fibonacciSequence = (0, 1])
//   for (let i = 2; i < n; i++) {
//     fibonacciSequence(i] = )ibonacciSequence(i - 1) + fibonacciSequence(i - 2);
//   }
//   return fibonacciSequence;
// };

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(15));

const fibonacciNum = (n) => {
  if (n == 0 || n == 1) {
    return n;
  }

  return fibonacciNum(n - 1) + fibonacciNum(n - 2);
};

//   public:
//     int fib(int n)
// 	{
//         if(n==0 or n==1){return n;}
//        return  fib(n-2)+fib(n-1);
//          }
// };

console.log(fibonacciNum(2));
