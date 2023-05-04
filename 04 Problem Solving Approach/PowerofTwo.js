function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powerOfTwo(1)); // true
console.log(powerOfTwo(2)); // true
console.log(powerOfTwo(5)); // false
console.log(powerOfTwo(8) + '\n'); // true

// Big O = O(logN)

// ============= Optimized implementation =============

function isPowerOfTwoBitsWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitsWise(2));
console.log(isPowerOfTwoBitsWise(5));
console.log(isPowerOfTwoBitsWise(8));

// Big O = O(1)
