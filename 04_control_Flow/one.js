// if

const isUserLoggedIn = true
const temperature = 41

// if (temperature <= 50) {
//     console.log("Temperature is less then 50");
// } else {
//     console.log("Temperature is greater then 50");
// }


// <, >, <=, >=, !=, ==, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2")  // not recommended

// if (balance < 500) {
//     console.log("Balance is less then 500");
// } else if (balance < 750) {
//     console.log("Balance is less then 750");

// } else if (balance < 900) {
//     console.log("Balance is less then 900");

// } else{
//     console.log("Balance is less then 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}