// const character = "hamza";
// console.log(character);

// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// inputs.forEach((input) => {
//   console.log(input);
// });


let character = "hamza";
let age = 30;
let isBlackBelt = false;

// character = 20;
character = "mario";

// age = "yoshi";
age = 40;

// isBlackBelt = "yes";
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(4.7));

// arrays
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(3);
// names[0] = 3;
console.log(names);


let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push("shaun");
// numbers[1] = "shaun";
console.log(numbers);

let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
console.log(mixed);

// objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";

// ninja.skills = ["fighting", "sneaking"]

ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,
    // skills: []
};

console.log(ninja);
