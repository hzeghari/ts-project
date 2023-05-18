// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
console.log(isLoggedIn);
// arrays
var names = [];
// names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);
// union types
var mixes = [];
mixes.push('Good Morning');
mixes.push(11);
mixes.push(true);
console.log(mixes);
var uid;
uid = '123';
uid = 123;
console.log(uid);
// objects
var user;
user = {
    name: 'luigi',
    age: 30
};
console.log(user);
var user2;
user2 = {
    name: 'mario',
    age: 25,
    isLoggedIn: true
};
