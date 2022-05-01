// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution:

function boolToWord(bool) {
  if (bool > 0){
      return "Yes"
  }else(bool < 0)
      return "No"
}


//Sample test:

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), "Yes");
    assert.strictEqual(boolToWord(false), "No");
  });
});


//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//Solution:
var summation = function (num) {
    let result = 0
    for (var i = 1; i <= num; i++){
        result += i;
    }
    return result;
};

//Sample test:

describe("summation", function () {
  it("should return the correct total", function () {
    Test.assertEquals(summation(1), 1);
    Test.assertEquals(summation(8), 36);
  });
});