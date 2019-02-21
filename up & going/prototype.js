
"use strict"

let foo = {
    a: 42
};

// create 'bar' and link it to 'foo' 
let bar = Object.create(foo);

bar.b = 'Hello world';

console.log(bar); // {b: 'Hello world'}. hint: The propery 'a' doesn't exit on the bar object
console.log(bar.a); // 42
console.log(bar.b); // Hello world