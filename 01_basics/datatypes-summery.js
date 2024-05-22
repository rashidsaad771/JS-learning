// primitive

// 7 types: string, number, boolean, undefined, null, symbol, bigInt
const score  = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 46346454564885465n


console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Quaid", "Iqbal", "Shair Khan"];
let myObj = {
    name: "rashid",
    age: 22,
} 

const myFunction =  function() {
    console.log("hello world");
}

console.log(typeof myFunction);