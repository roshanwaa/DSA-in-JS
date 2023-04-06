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

// var myVariable = { boolean: true, number: 1, string: 'a', array: [1, 2, 3] };
// var myVariable = 'singhsd;kfnnfk';
// var myVariable = 14;

// logSizeInBytes('arr', myVariable);
logSizeInBytes('arr', sumOfArr([1, 2, 3, 4, 5]));
