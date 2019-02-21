 "use strict";

/*
    You can think of closure as a way to “remember” and continue to
    access a function’s scope (its variables) even once the function has
    finished running.
*/

function makeAdder(x){
    // parameter 'x' is an inner variable
    
    // inner function 'add' uses 'x', so
    // it has a "closure" over it
    function add(y){
        return x + y;
    }

    return add;
}

const plusOne = makeAdder(1);
const plusTen = makeAdder(10);

console.log(plusOne(3));
console.log(plusTen(13));
console.log(makeAdder(5)(6));
