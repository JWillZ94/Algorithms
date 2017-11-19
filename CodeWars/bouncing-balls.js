"use strict";

// Question: How many times will the person in the window see the ball either fall or rise?

function problem(h, bounce, window) {
  var ballBounces = -1;
  if (h > 0 && window < h && 0 < bounce && bounce < 1) {
    while (h > window) {
      h *= bounce;
      ballBounces += 2; // For rise and fall of the ball
    }
  } else {
    return -1;
  }
  return ballBounces;
}
console.log(problem(30.0, 0.66, 1.5));

/* Notes: Assigned ballBounces to -1 to account for the one last fall that the ball would make and decrease the height each time by the bounce factor until it decreased under the window height. */
