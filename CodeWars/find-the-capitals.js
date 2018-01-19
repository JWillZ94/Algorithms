"use strict";

// Question: Put the indexes of letters that are capitals into an array and return it.

function problem (str) {
  var capitals = [];
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      capitals.push(i);
    }
  }
  return capitals;
}
console.log(problem('CodEWaRs'));


/* Notes:  */
