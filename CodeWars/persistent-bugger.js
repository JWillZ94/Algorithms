"use strict";

// Question: Take a number and return its multiplicative persistence.

function problem(n) {
  var arr = n.toString().split('');
  var count = 0;
  while (arr.length > 1) {
    arr = arr.reduce((i, j) => {
      return i * j;
    }).toString().split('');
    count++;
  }
  return count;
}
console.log(problem(999));


/* Notes: Solved this problem in a style I'm not used to (using while and reduce) but it's great to get practice with unfamiliar problem solving styles. */
