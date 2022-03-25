// ! Q. Write a function which takes in a string and returns counts of each character in the string.
// charCount('"Your PIN number is 1234!")
/* {
   1: 1,
   2: 1,
    3: 1,
   4: 1,
    b: 1,
    e: 1,
   i: 2,
    m: 1,
   n: 2,
    o: 1,
   p: 1,
    r: 2,
    s: 1,
    u: 2,
   у: 1
} */

// function charCount(str) {
//   // * make object to return at end
//   var result = {};
//   // * loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     //* if the char is a number/letter AND is a key in object, add one to count
//     if (result[char] > 0) {
//       result[char]++;
//     }
//     //* if the char is a number/letter AND not in object, add it to object and set value to 1
//     else {
//       result[char] = 1;
//     }
//   }
//   //* if character is something else (space, period, etc.) don't do anything
//   // * return object at end
//   return result;
// }

// ! Or

function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
        1;
      }
    }
  }
  return obj;
}

console.log(charCount('Hello, world! this is Mr.Smoke'));
