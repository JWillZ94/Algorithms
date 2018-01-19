"use strict";

// Question: Find the number of vowels in the string and return them.

function problem(str) {
  var vowelsCount = 0;
  str.split('').map((i) => {
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
      vowelsCount++;
    }
  })
  return vowelsCount;
}
console.log(problem("abracadabra"));

/* Notes: Applied the map method to the str that I made into an array and added the amount of vowels to a counting variable */
