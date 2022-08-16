//Problem:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//Solution
function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }
//Test 

// describe("Basic tests", () => {
//     it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//     it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
//   });