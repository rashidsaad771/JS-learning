

function myName(){
    console.log("R");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("d");
}

// myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // const result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(5, 6)
// console.log(result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("rashid"));


function calcualteCartPrice(...num1){
    return num1
}

// console.log(calcualteCartPrice(200, 300, 500, 2000));

const user = {
    name: "rashid",
    price: 199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    name: "Sam",
    price: 399,
})

const myArray = [1000, 250, 200, 500]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200, 30, 500, 600]))