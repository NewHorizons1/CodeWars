// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// Soultion:


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed /= 2;
  }
  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
    ? "Alive!"
    : "Shark Bait!";
}


//Sample tests:
describe("Example tests", () => {
  Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
  Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
  Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
});


// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//Solution:
function past(h, m, s) {
  //#Happy Coding! ^_^
}

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

//Test: 
describe("Fixed Tests", () => {
  it("Tests", () => {
    Test.assertEquals(past(0, 1, 1), 61000);
    Test.assertEquals(past(1, 1, 1), 3661000);
    Test.assertEquals(past(0, 0, 0), 0);
    Test.assertEquals(past(1, 0, 1), 3601000);
    Test.assertEquals(past(1, 0, 0), 3600000);
  });
});

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:


//Solution:

function abbrevName(name) {
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}


//Sample tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});



// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//Solution:
function grow(x) {
  return x.reduce((a,b) => a * b, 1);
}



//Tests:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
  });
});



//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


//Solution:
function even_or_odd(number) {
    if(number % 2 === 0) {
      return 'Even';
    } else {
      return 'Odd';
    }
};



//Sample Tests
const chai = require("chai");
const assert = chai.assert;

describe("Sample tests", () => {
  it("2 is even", () => {
    assert.strictEqual(even_or_odd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(even_or_odd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(even_or_odd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(even_or_odd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(even_or_odd(0), "Even");
  });
});


