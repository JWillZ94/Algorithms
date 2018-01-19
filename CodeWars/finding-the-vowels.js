"use strict";

// Question: Find the indexes of the vowels in te string.

function problem(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  var arr = str.split('');
  var indexes = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        indexes.push(i + 1);
      }
    }
  }
  return indexes;
}
console.log(problem("orangedbalhcvlahcvalw"));


/* Notes: Has an O(N^2) complexity. */
