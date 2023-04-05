const countUpAndDown = (n) => {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
};

var time1 = performance.now();

countUpAndDown(100000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
