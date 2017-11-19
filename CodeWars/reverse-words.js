"use strict";

// Question: Reverse the words in a string without changing the word order or the placement of spaces.

function problem(str) {
  var arr = str.split(' '); // splits into individual words
  for (var i = 0; i < arr.length; i++) {
    str = str.replace(arr[i], arr[i].split('').reverse().join('')); // replace the words in the original str w/ reversed versions of them
  }
  return str;
}
console.log(problem('double  spaced     words'));

/* Notes: Took each word, reversed it, and placed them back in the string. */
