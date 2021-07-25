//Question: Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".




//Solution:

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
//   }


//Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//     assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//   })
// })



// Problem:
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


//Solution:
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }
    hoopCount(1)



//Tests

// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
//   Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
//     });
//   });
  