const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(4) + '\n'); // returns false

// Big O = O(n)

// ============ OR ============

function isPrimeSQRT(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeSQRT(1)); // returns false
console.log(isPrimeSQRT(5)); // returns true
console.log(isPrimeSQRT(4)); // returns false

// Big O = O(n^2)
