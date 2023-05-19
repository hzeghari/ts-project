"use strict";
// Functions
let greet = (name) => {
    console.log(`Hello ${name}!`);
};
greet("Hamza 47");
let greetAgain2;
greetAgain2 = () => {
    console.log("Hello again, again!");
};
greetAgain2();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
