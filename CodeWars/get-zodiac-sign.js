"use strict";

// Question: Return a zodiac sign based on the month and day.

function problem(day, month) {
  switch(month) {
    case 1:
      if (day <= 19) {
        return 'Capricorn'
      } else if (day > 19 && day <= 31) {
        return 'Aquarius'
      }
      return 'invalid date';
      break;
    case 2:
      if (day <= 18) {
        return 'Aquarius'
      } else if (day > 18 && day <= 28) {
        return 'Pisces'
      }
      return 'invalid date';
      break;
    case 3:
      if (day <= 20) {
        return 'Pisces'
      } else if (day > 20 && day <= 31) {
        return 'Aries'
      }
      return 'invalid date';
      break;
    case 4:
      if (day <= 19) {
        return 'Aries'
      } else if (day > 19 && day <= 31) {
        return 'Taurus'
      }
      return 'invalid date';
      break;
    case 5:
      if (day <= 20) {
        return 'Taurus'
      } else if (day > 20 && day <= 31) {
        return 'Gemini'
      }
      return 'invalid date';
      break;
    case 6:
      if (day <= 20) {
        return 'Gemini'
      } else if (day > 20 && day <= 31) {
        return 'Cancer'
      }
      return 'invalid date';
      break;
    case 7:
      if (day <= 22) {
        return 'Cancer'
      } else if (day > 22 && day <= 31) {
        return 'Leo'
      }
      return 'invalid date';
      break;
    case 8:
      if (day <= 22) {
        return 'Leo'
      } else if (day > 22 && day <= 31) {
        return 'Virgo'
      }
      return 'invalid date';
      break;
    case 9:
      if (day <= 22) {
        return 'Virgo'
      } else if (day > 22 && day <= 31) {
        return 'Libra'
      }
      return 'invalid date';
      break;
    case 10:
      if (day <= 22) {
        return 'Libra'
      } else if (day > 22 && day <= 31) {
        return 'Scorpio'
      }
      return 'invalid date';
      break;
    case 11:
      if (day <= 21) {
        return 'Scorpio'
      } else if (day > 21 && day <= 31) {
        return 'Sagittarius'
      }
      return 'invalid date';
      break;
    case 12:
      if (day <= 21) {
        return 'Sagittarius'
      } else if (day > 21 && day <= 31) {
        return 'Capricorn'
      }
      return 'invalid date';
      break;
  }
}
console.log(problem(5, 5));


/* Notes: Used switch to provide a result of each case. */
