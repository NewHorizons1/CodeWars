//Problem:
/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
For example: */


//Solution 

function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
}

//Problem
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):



//Solution 

function digitize(n) {
    const answer = []
    const str = n.toString()

    for (item of str) {
        answer.unshift(parseInt(item))
    }
    return answer
}

function digitize(n) {
    const str = n.toString()
    const intCOnverter = (item) => parseInt(item)
    return Array.from([...str].reverse(), intCOnverter)
}

function digitize(n) {
    return Array.from(String(n), Number).reverse()
}

function digitize(n) {
    return ("" + n).split("").map(el => el * 1).reverse()
}

function digitize(n) {
    return [...String(n)].map(Number).reverse()
}


//Problem

// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:


//Solution 

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return goal = (laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}



//Problem:
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)


//Solution 
String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
}

