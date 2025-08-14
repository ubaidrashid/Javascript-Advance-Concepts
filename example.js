console.log("Script start");

// Global variables
var a = 10;
let b = 20;

function greet(name) {
    console.log("Hello " + name);
}

function sum(x, y) {
    let result = x + y;
    console.log("Sum is:", result);
    return result;
}

greet("Baid");
sum(a, b);

console.log("Script end");
