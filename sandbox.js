// type any
var size = 123;
size = '123';
console.log(size);
size = true;
console.log(size);
size = { name: '123' };
console.log(size);
var mix = [];
mix.push(1);
mix.push('1');
mix.push(true);
mix.push({ name: '1' });
console.log(mix);
var person;
person = { name: '123', age: 123 };
console.log(person);
person = { name: 123, age: '123' };
console.log(person);
