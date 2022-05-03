//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//Use conditionals to return the proper message:

//Solution
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//Sample tests
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(greet("Daniel", "Daniel"), "Hello boss");
    Test.assertEquals(greet("Greg", "Daniel"), "Hello guest");
  });
});

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Solution
function removeExclamationMarks(s) {
  return s.split("!").join("");
}


//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});


//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//Example: n= 5, m=5: 25
//n=-5, m=5:  0

//Solution:

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
}

//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Simple Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5, 5), 25, "Failed at paperwork(5, 5)");
    assert.strictEqual(paperwork(5, -5), 0, "Failed at paperwork(5, -5)");
    assert.strictEqual(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)");
    assert.strictEqual(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)");
    assert.strictEqual(paperwork(5, 0), 0, "Failed at paperwork(5, 0)");
  });
});

