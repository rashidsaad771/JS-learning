const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

 
// falsy values

// false, 0, -0, null, undefined, BigInt 0n, NaN, ""

// truthy valuses

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

let emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);


// terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Price is greater then 80") : console.log("Price is less then 80")