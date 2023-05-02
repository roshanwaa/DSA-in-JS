let instructor = {
  firstName: 'Mr.Smoke and the rest of the ❤️',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
console.log(instructor.firstName);

//  ! Big O of Objects
//  * Insertion -   O(1)
//  * Removal -   O(1)
//  * Searching -   O(N)
//  * Access -   O(1)
//  */

// /*
//  ! Big O of Object Methods
//  * Object.keys -   O(N)
//  * Object.values -   O(N)
//  * Object.entries -   O(N)
//  * hasOwnProperty -   O(1)
// */

// ! ARRAYS
//*Ordered lists!

let names = ['Michael', 'Melissa', 'Andrea'];

let values = [true, {}, [], 2, 'awesome'];

// ? Big O of Arrays
/* 
  Insertion -   It depends....
  Removal -   It depends....
  Searching -   O(N)
  Access -   O(1)
  Let's see what we mean by that!
*/

// ! Big O of Array Operations

/* 
  push -   O(1)
  pop -   O(1)
  shift -   O(N)
  unshift -   O(N)
  concat -   O(N)
  slice -   O(N)
  splice -   O(N)
  sort -   O(N * log N)
  forEach/map/filter/reduce/etc. -   O(N) 
*/
