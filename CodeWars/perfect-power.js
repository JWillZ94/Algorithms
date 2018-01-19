"use strict";

// Question: Determine if n is a perfect power.

function problem(n) {
  for (var i = 2; i < n; i++) {
    for (var j = 2; j < n; j++) {
      if (n === Math.pow(i, j)) {
        return [i, j];
      }
    }
  }
  return null;
}
console.log(problem(9));


/* Notes:  */
