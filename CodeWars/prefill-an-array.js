"use strict";

// Question: Return array of n elements that have value of v, without using a loop.

function problem(n, v) {
  var arr = [];
  n = n.toString();
  if (n != parseInt(n) || n < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  arr.length = n;
  return arr.fill(v);
}
console.log(problem(true, 4));


/* Notes: Used the methods to my advantage. */
