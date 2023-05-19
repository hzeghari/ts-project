// Functions

let greet = (name: string) => {
    console.log(`Hello ${name}!`);
}

greet("Hamza 47");

let greetAgain2: Function;

greetAgain2 = () => {
    console.log("Hello again, again!");
}

greetAgain2();

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, "20");

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7);
console.log(result);