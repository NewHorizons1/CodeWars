/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([194, 20304, 201, 200, 10]));
console.log(max([194, 20304, 201, 200, 10]));
