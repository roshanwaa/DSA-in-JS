function addUpTo(n) {
  return (n * (n + 1)) / 2;
  // 6 * (6 + 1) / 2
  // 6 * 7 / 2
  // 42 / 2
  // 21
}

// --------------------------------------------------------

// Add 1
// ! Suppose we went to write a fun that calculates the sum of the all numbers  from 1 up to (and including) some numbers n.

// * EX = 1 + 2 + 3 = 6

function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var time1 = performance.now();
addUpto(1000000000000000000);
// addUpTo(10000000000);

var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

/* Counting is hard!
Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2 

But regardless of the exact number, the number of operations grows roughly proportionally with n

If n doubles, the number of operations will also roughly double */
