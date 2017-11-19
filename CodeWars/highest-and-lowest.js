"use strict";

// Question: Return a string of the highest and lowest number of a string.

function problem(numbers) {
  var arr = numbers.split(' ').sort((a,b) => {
    return b-a;
  });
  return [arr[0], arr[arr.length - 1]].join(' ');

}
console.log(problem("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

/* Notes: Made string into an array, sorted the array from highest to lowest, put the highest and lowest number in its own array and made it into a string again. */
