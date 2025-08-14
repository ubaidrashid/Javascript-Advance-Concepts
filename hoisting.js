// Hoisting Example

console.log(a); // Output: undefined
var a = 10;

sayHello(); // Output: Hello World

function sayHello() {
    console.log("Hello World");
}

console.log(b); // Output: ReferenceError
let b = 20;
