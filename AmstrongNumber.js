

//Excercise: Write a JavaScript program to find the armstrong numbers of 3 digits
//Create a For Loops that iterates all numbers between 100 and 999. 
// for (let index = 100; index <= 999; index++) {
//     //Inside the body of the Loops, we define the string that split variables a, b, c as 3 digits
//     const digits = index.toString();
//     const chars = digits.split("");
//     const a = parseInt(chars[0]);
//     const b = parseInt(chars[1]);
//     const c = parseInt(chars[2]);
//     //Create an IF statement that the condition is a*a*a + b*b*b + c*c*c = abc
//     if (a * a * a + b * b * b + c * c * c === index) {
//         //console.log(abc)
//         console.log(index);
//     }
// }

// Refactoring code in the above exercise:
// Create a function which accepts number and returns boolean true or false
function isArmstrong(num) {
    const digits = num.toString();
    const chars = digits.split("");
    const a = parseInt(chars[0]);
    const b = parseInt(chars[1]);
    const c = parseInt(chars[2]);
    return  a * a * a + b * b * b + c * c * c === num;
}
// If true - the accepted number is Armstrong number
for (let index = 100; index <= 999; index++) {
    if (isArmstrong(index)) {
        console.log(index);
    }
}