"use strict";

// Question: Find smallest word length out of the string of words

function problem(s) {
  var arr = s.split(' ');
  var lim = arr.length;
  while (lim--) {
    for (var i = 0, j = 1; i < lim; i++, j++) {
      if (arr[i].length > arr[j].length) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[i].length;
}
console.log(problem("bitcoin take over the world maybe who knows perhaps"));

// Notes: Solved using a simple bubble sort algorithm
