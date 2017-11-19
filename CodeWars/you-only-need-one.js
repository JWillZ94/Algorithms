"use strict";

// Question: Return true or false depending on whether x is in the a array or not.

function problem(a, x) {
  return a.includes(x);
}
console.log(problem([80, 117, 115, 104, 45, 85, 112, 115], 45));

/* Notes: Just used a simple includes method to determine the answer. */
