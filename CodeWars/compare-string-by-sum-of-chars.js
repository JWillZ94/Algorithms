"use strict";

// Question: Return true if the addition of the unicode of letters in s1 is equal to s2.

function problem(s1, s2) {
  if (s1 == "" || s2 == "" || s1.match(/[^a-z]/gi) || s2.match(/[^a-z]/gi)) {
    return true;
  }
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  var codeSum1 = 0;
  var codeSum2 = 0;
  for (var i = 0; i < s1.length; i++) {
    codeSum1 += s1.charCodeAt(i);
  }
  for (var j = 0; j < s2.length; j++) {
    codeSum2 += s2.charCodeAt(j);
  }
  return codeSum1 == codeSum2;
}
console.log(problem("!!", "ffPFF"));

/* Notes: Returned true or false according to the outcome. Added the unicodes into a separate array. */
