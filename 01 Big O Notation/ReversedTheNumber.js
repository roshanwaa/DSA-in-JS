function reversedNum(num) {
  return (
    parseFloat(
      num
        .toString() // convert the number to a string
        .split('') // split the number
        .reverse() // reverse the number
        .join('') // join the number
    ) * Math.sign(num)
  );
}

const reverseArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const reverse = (num) => {
  return num.toString().split('').reverse().join('');
};

var time1 = performance.now();

// console.log(reverseArr.reverse()); // 0.004466799974441528 seconds.

// console.log(reverse(42674678)); //0.0031879000067710876 seconds.

console.log(reversedNum(42674678)); // 0.008381999969482423 seconds.

var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
