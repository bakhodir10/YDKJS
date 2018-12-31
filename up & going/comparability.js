
var a = "42";
var b = 42;
console.log(a == b);    // true, it coerces either "42" to be 42 or 42 to be "42"
console.log(a === b);   // false, it doesn't allow to do coercion

var c = [1, 2, 3];
var d = [1, 2, 3];
var e = "1,2,3";
console.log(c == e);    // true, it coerces [1,2,3] to string "1,2,3";

// false, it doesn't check each value in array c and d nor there is no coercion since they are the same type;
console.log(c == d);