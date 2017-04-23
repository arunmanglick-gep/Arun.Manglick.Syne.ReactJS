// var x = 10;
// var x = "ABC";
// document.write("x is " + x);

// var x = 1;
// console.log("Before: " +  x);

// for (var x = 0; x < 10; x++) {
//     console.log("Inside Loop: " + x);
// }

// console.log("After: " +  x);

// let x = 10;
// let x = "ABC";
// document.write("x is " + x);

// let x = 1;
// console.log("Before: " +  x);

// for (let x = 0; x < 10; x++) {
//     console.log("Inside Loop: " + x);
// }

// console.log("After: " +  x);

// function f(inp) {
//     var x = 20;

//     if(inp){
//         var x = "Hello";
//     }

//     return x;
// }

function f(inp) {
    var x = 20;

    if(inp){
        let x = "Hello";
    }

    return x;
}

console.log(f(false));
console.log(f(true));