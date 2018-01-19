"use strict";

// Question: Write a method that returns even or odd outlier.

function problem(arr) {
  var odd = [];
  var even = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even += arr[i] : odd += arr[i];
  }
  return odd.length > even.length ? Number(even) : Number(odd);
}
console.log(problem([2,6,8,10,3]));


/* Notes: First time using the ternary operator. */
