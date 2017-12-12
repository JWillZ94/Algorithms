"use strict";

// Question: Take the sets of strings and reverse the letters in each line and reverse the order of the strings in each line.

function problem1(strng) {
  return strng.split('\n').map((i) => {
    return i.split('').reverse().join('');
  }).join('\n');
}
console.log(problem1("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));

function problem2(strng) {
  return strng.split('\n').reverse().join('\n');
}
console.log(problem2("lVHt\nJVhv\nCSbg\nyeCt"));

function problem3(fct, s) {
  return fct(s);
}
console.log(problem3(problem2, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));

/* Notes: For first problem, I used .map to reverse the letters in the indexes of the array, for second problem I split the string, reversed it and brought it back together, and the third problem I called the second function with a different string. */
