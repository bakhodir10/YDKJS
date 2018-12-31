

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

console.log(obj);   // { a: 'hello world', b: 42, c: true}
console.log(obj.a); // hello world
console.log(obj["a"]);  // hello world, However, obj.a is always best practise

// tricky test
var b = "a";
console.log(obj[b]); // hello world
console.log(obj["b"]);  // 42