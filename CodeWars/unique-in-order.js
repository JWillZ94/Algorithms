"use strict";

// Question: Return the Unique letters in order with no duplicates in the order.

function problem(iter) {
  if (typeof iter == 'string') {
    var arr = iter.split('');
  } else {
    var arr = iter;
  }
  var lim = arr.length;
  var newarr = [];
  for (var i = 0, j = 1; i < lim; i++, j++) {
    if (arr[i] != arr[j]) {
      if (typeof arr[i] == 'number') {
        arr.pop();
        return arr;
      }
      newarr += arr[i];
    }
  }
  if (newarr.length == 0) {
    return [];
  }
  return newarr.split('');
}
console.log(problem("AAAABBBCCDAABBB"));


/* Notes: Returned different results based on what the passed in type was, made it into an array, iterated through it and returned the unique letters in order in the argument. */
