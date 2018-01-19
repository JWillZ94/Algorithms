"use strict";

// Question: If there's a triple, same digit number within the first number and a double same digit in the second number return 1. Otherwise return 0.

function problem(n1, n2) {
  let arr = n1.toString().split('');
  let lim = arr.length;
  let arr2 = n2.toString().split('');
  let lim2 = arr2.length;
  for (var i = 0, j = 1, k = 2; i < lim; i++, j++, k++) {
    if (arr[i] === arr[j] && arr[j] === arr[k] && arr[i] === arr[k]) {
      for (var l = 0, m = 1; l < lim2; l++, m++) {
        if (arr2[l] === arr2[m] && arr2[l] === arr[i]) {
          return 1;
        }
        if (l == lim2) {
          return 0;
        }
      }
    }
    if (k == lim) {
      return 0;
    }
  }
}
console.log(problem(666789, 12345667));


/* Notes: Made a for loop within a for loop so rounded out to being a O(n^2) algorithm. */
