// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

console.log(isLoggedIn);

// arrays

let names: string[] = [];

// names = ['luigi', 'mario', 'yoshi'];

names.push('toad');

console.log(names);

// union types

let mixes: (string | number | boolean)[] = [];
mixes.push('Good Morning');
mixes.push(11);
mixes.push(true);

console.log(mixes);

let uid: string | number;

uid = '123';
uid = 123;

console.log(uid);

// objects

let user: object;

user = {
    name: 'luigi',
    age: 30
}

console.log(user);

let user2: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

user2 = {
    name: 'mario',
    age: 25,
    isLoggedIn: true
}
