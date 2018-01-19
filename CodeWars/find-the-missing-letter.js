"use strict";

// Question: Find missing letter in the array of increasing letters.

function problem(arr) {
  var lim = arr.length;
  for (var i = 0, j = 1; i < lim; i++, j++) {
    if (arr[i].charCodeAt() != (arr[j].charCodeAt() - 1)) {
      return String.fromCharCode(arr[i].charCodeAt() + 1);
    }
  }
}
console.log(problem(['a','b','c','d','f']));


/* Notes: Converted the letters to unicode values, found the missing one and returned the missing one to string format. */
