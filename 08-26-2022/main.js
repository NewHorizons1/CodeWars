//Problem:
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.



//Solution

function expressionMatter(a, b, c) {
    let r = Math.max(
        a + b + c,
        a * b * c,
        a * b + c,
        a * (b + c),
        a + b * c,
        (a + b) * c
    );
    return r
}