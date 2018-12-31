
function foo(){
    return 42;
}

foo.bar = "hello world";
console.log(typeof foo);    // function
console.log(typeof foo());  // number
console.log(typeof foo.bar);  // string, again function is a subtype of object.  

// built-in methods
var a = "hello world";
var b = 3.14159;

console.log(a.length);  // 11
console.log(a.toUpperCase());   // HELLO WORLD
console.log(b.toFixed(2));  // 3.14