"use strict";

// Question: Write a function to calculate the factorial of an input.

function problem(n) {
  if (n > 12 || n < 0) {
    throw new RangeError;
  } else if (n === 0) {
    return 1;
  }
  var s = n - 1;
  while (s > 0) {
    n = n * s;
    s--;
  }
  return n;
}
console.log(problem(4));


/* Notes: Used recursion to solve the repeating multiplication problem. */
