// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Solution:

function removeChar(str){
    return str.slice(1, -1);

};


// Sample Tests:
const chai = require("chai");
//const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar("eloquent"), "loquen");
    assert.strictEqual(removeChar("country"), "ountr");
    assert.strictEqual(removeChar("person"), "erso");
    assert.strictEqual(removeChar("place"), "lac");
    assert.strictEqual(removeChar("ooopsss"), "oopss");
  });
});
 
//Simple, remove the spaces from the string, then return the resultant string.


//Solution:
function noSpace(x) {
  return x.replace(/\s/g, "");
}


// Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(
      noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"),
      "8j8mBliB8gimjB8B8jlB"
    );
    assert.strictEqual(
      noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
      "88Bifk8hB8BB8BBBB888chl8BhBfd"
    );
    assert.strictEqual(noSpace("8aaaaa dddd r     "), "8aaaaaddddr");
  });
});

// Nathan loves cycling.

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//Solution:
function litres(time) {
  return Math.floor(time * 0.5);
}

// Sample Tests:

const chai = require("chai");
//const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("Tests", () => {
    assert.strictEqual(litres(2), 1, "should return 1 litre");
    assert.strictEqual(litres(1.4), 0, "should return 0 litres");
    assert.strictEqual(litres(12.3), 6, "should return 6 litres");
    assert.strictEqual(litres(0.82), 0, "should return 0 litres");
    assert.strictEqual(litres(11.8), 5, "should return 5 litres");
    assert.strictEqual(litres(1787), 893, "should return 893 litres");
    assert.strictEqual(litres(0), 0, "should return 0 litres");
  });
});

//Sentence Smash

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//Solution: 

function smash (words) {
    "use strict";
    return words.join(' ');
};
// Sample Tests:



// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


//Solution:

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}



// Sample Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Regular Tests:", function () {
  it("Should work for under 3 days:", function () {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it("Should work for under 7 days:", function () {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });

  it("Should work for 7 or more days:", function () {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});

//Tomorrow I will do more.