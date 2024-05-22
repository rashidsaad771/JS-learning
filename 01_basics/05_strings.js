const name = "Rashid"
const repoCount = 5

// console.log(name + repoCount + "value");  // not recommended

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('RashidLT')
const index = 4

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(`An index of ${index} returns the character ${gameName.at(index)}`);

console.log(gameName.charAt(3));
console.log(gameName.charCodeAt(index));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   hitesh    "

console.log(newStringOne);
console.log(newStringOne.trim());