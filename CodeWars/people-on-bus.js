"use strict";

// Question: Return number of people still on the bus after the last bus station.

function problem(busStops) {
  var people = 0;
  for (var i = 0; i < busStops.length; i++) {
    people += busStops[i][0];
    people -= busStops[i][1];
  }
  return people;
}
console.log(problem([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));

/* Notes: Provided a count for num of people, iterated through the busStops array to split it into the arrays where each represented a stop where a certain amount of people boarded the bus while others went off, added the number of people that boarded the bus to the people count while subtracted people that went off the bus then returned the amount of remaining people. */
