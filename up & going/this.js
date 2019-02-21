// "use strict"

/*
    It’s important to realize that this does not refer to the function itself,
    as is the most common misconception.
*/

function foo(){
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo();

foo(); // "global"
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); // "undefined"