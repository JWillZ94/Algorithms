"use strict";

// Question: Find the missing number from a sequence of positive numbers start from 1.

function problem(seq) {
  if (seq === "") {
    return 0;
  }
  seq = seq.split(' ')
    .sort((a, b) => a - b)
    .map(i => Math.floor(i));
  if (!seq.every(char => Number.isInteger(char)) || seq[0] !== 1) {
    return 1;
  }
  for (var i = 0, j = 1; i < seq.length; i++, j++) {
    if (seq[j] - seq[i] > 1) {
      return seq[i] + 1;
    }
  }
  return 0;
}
console.log(problem("1 2 4 5"))

/* Notes: First time implementing multiple higher-order functions on an array. */