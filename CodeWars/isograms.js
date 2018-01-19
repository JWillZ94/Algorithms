"use strict";

// Question: Determine if the passed-in string has repeating letters.

function problem(str) {
  if (str === "") {
    return true;
  }
  var arr = str.toUpperCase().split('').sort((a, b) => {
    return a.localeCompare(b);
  })
  for (var i = 0, j = 1; i < arr.length; i++, j++) {
    if (arr[i] === arr[j]) {
      return false;
    }
  }
  return true;
}
console.log(problem("aba"));


/* Notes: Used a new method for me, localCompare, to sort the letters in alphabetical order. */
