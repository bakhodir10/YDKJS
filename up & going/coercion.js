
// explicit coercion
var a = "42";
var b = Number(a);
console.log(typeof a);  // string
console.log(typeof b);  // number

// implicit coercion
var c = "42";
var d = a * 1;
console.log(typeof c);  // string
console.log(typeof d);  // number

var e = "";
var f = Boolean(e);
console.log(f); // false