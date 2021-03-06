// Problem 5: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smMult(arr) {
  for (let i = 2520; i < Infinity; i += 20) {
    for (let j = 0; j < arr.length; j++) {
      if (i % arr[j] !== 0) {
        break;
      } else if (j === arr.length - 1) {
        return i;
      }
    }
  }
}

console.log( smMult([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) ); // 232792560
