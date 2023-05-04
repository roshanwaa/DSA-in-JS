const getSizeInBytes = (obj) => {
  let str = null;
  if (typeof obj === 'string') {
    // If obj is a string, then use it
    str = obj;
  } else {
    // Else, make obj into a string
    str = JSON.stringify(obj);
  }
  // Get the length of the Uint8Array
  const bytes = new TextEncoder().encode(str).length;
  return bytes;
};

const logSizeInBytes = (description, obj) => {
  const bytes = getSizeInBytes(obj);
  console.log(`${description} is approximately ${bytes} B`);
};

// ! O(1) space!
function sumOfArr(arr) {
  let total = 0; //one number

  for (
    let i = 0; //another number
    i < arr.length;
    i++
  ) {
    total += arr[i];
  }
  return total;
}

// ! O(n) space!
function doubleTheArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr; //n numbers
}

// var myVariable = { boolean: true, number: 1, string: 'a', array: [1, 2, 3] };
// var myVariable = 'singhsd;kfnnfk';
// var myVariable = 14;

// logSizeInBytes('arr', myVariable);
console.log(sumOfArr([1, 2, 3, 4, 5]));
logSizeInBytes('sumOfArr', sumOfArr([1, 2, 3, 4, 5]));
console.log(doubleTheArr([1, 2, 3, 4, 5]));
logSizeInBytes('doubleTheArr', doubleTheArr([1, 2, 3, 4, 5]));
