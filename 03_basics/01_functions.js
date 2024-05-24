

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

console.log(loginUserMessage("rashid"));