"use strict";

// Question: Return true if the app allows you to walk for exactly ten minutes and returns you to starting point.

function problem(walk) {
  var vert = 0;
  var hor = 0;
  if (walk.length == 10) {
    for (var i = 0; i < walk.length; i++) {
      switch(walk[i]) {
        case 'n':
          vert += 1;
          break;
        case 's':
          vert -= 1;
          break;
        case 'e':
          hor += 1;
          break;
        case 'w':
          hor -= 1;
          break;
        default:
          break;
      }
    }
    if (vert == 0 && hor == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(problem(['n','e','s','w','w','s','e','n','n','s']));

/* Notes: Used a switch statement to handle each array input if it was the right amount, added and subtracted according to direction, like a grid. */
