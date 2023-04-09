/*  Given a string of lowercase English letters and an integer of the substring length, determine the substring of that length that contains the most vowels. Vowels are in the set {a, e, i, o, u}. If there is more than one substring with the maximum number of vowels, return the one that starts at the lowest index. If there are no vowels in the input string, return the string 'Not found!' without quotes.
Example 1

s = 'caberqiitefg'

k = 5
The substring of length k = 5 that contains the maximum number of vowels is 'erqii' with 3 vowels.

The final answer is 'erqii'.
Example 2
s = 'aeiouia'
k = 3
All of the characters are vowels, so any substring of length 3 will have 3 vowels. The lowest index substring is at index 0, 'aei'.
Function Description
Complete the function findSubstring in the editor below.
findSubstring has the following parameters:
    s:  a string

    k: an integer
Returns:
 string: a string containing the final answer
Constraints

1 ≤ length(s) ≤ 2 * 105
1 ≤ k ≤ length(s)
Input Format For Custom Testing
The first line contains a string, s.
The second line contains an integer, k.
Sample Case 0
Sample Input
STDIN      Function
-----      -----
azerdii →  s = 'azerdii'
5       →  k = 5

Sample Output
erdii
Explanation
s = 'azerdii'

k = 5
The possible 5 character substrings are:

    'azerd' which contains 2 vowels

    'zerdi' which contains 2 vowels

    'erdii' which contains 3 vowels

 

The final answer is 'erdii'.
in js */

/*
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function findSubstring(s, k) {
  // Write your code here
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxVowelCount = 0;
  let maxVowelSubstring = '';
  let vowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      vowelCount++;
    }
  }
  maxVowelCount = vowelCount;
  maxVowelSubstring = s.substring(0, k);
  for (let i = 1; i <= s.length - k; i++) {
    let prevChar = s[i - 1];
    let nextChar = s[i + k - 1];
    if (vowels.has(prevChar)) {
      vowelCount--;
    }
    if (vowels.has(nextChar)) {
      vowelCount++;
    }
    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      maxVowelSubstring = s.substring(i, i + k);
    }
  }
  return maxVowelCount > 0 ? maxVowelSubstring : 'Not found!';
}

console.log(findSubstring('qwdftr', 2));
console.log(findSubstring('azerdii', 5));
