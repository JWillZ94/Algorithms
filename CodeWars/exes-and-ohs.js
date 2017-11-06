"use strict";

// Question: Return true or false depending whether the amount of case insensitive o's equal the amount of x's.

function problem(str) {
  var arr = str.split('');
  var oh = 0;
  var ex = 0;
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'o':
        oh++;
        break;
      case 'O':
        oh++;
        break;
      case 'x':
        ex++;
        break;
      case 'X':
        ex++;
        break;
      default:
        break;
    }
  }
  if (oh == ex) {
    return true;
  } else {
    return false;
  }
}
console.log(problem("ooO5xXXyyym"));

/* Notes: Used a switch statement to add each value to the amount of o's and x's there are and tested to see if theres an equal amount of them */
