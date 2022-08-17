// Problem: We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// Solution:

function numberToString(num) {
    return num.toString()
}

//The above solution returns the parameter num to a string.



//Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//Solution:

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/T/g, "U")
}