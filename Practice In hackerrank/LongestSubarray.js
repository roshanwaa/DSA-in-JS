function longestSubarray(arr) {
  let maxLength = 0;
  let start = 0;
  let end = 0;
  let distinctValues = new Set();

  while (end < arr.length) {
    distinctValues.add(arr[end]);

    // If we have more than two distinct values, move the start of the window
    while (distinctValues.size > 2 || Math.abs(arr[end] - arr[start]) > 1) {
      distinctValues.delete(arr[start]);
      start++;
    }

    // Update the max length if necessary
    maxLength = Math.max(maxLength, end - start + 1);

    end++;
  }

  return maxLength;
}
