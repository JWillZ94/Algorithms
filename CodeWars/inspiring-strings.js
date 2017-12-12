"use strict";

// Question: In a string of words, return the word with the longest length.

function problem(stringOfWords) {
  var arr = stringOfWords.split(' ').sort((a, b) => {
    return a.length - b.length;
  });
  return arr[arr.length - 1];
}
console.log(problem('one twoooo three')); // twoooo

/* Notes: Split the string into an array of strings, sorted the strings by length of the strings then returned the last one which is sorted as the longest word. */
