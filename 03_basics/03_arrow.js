const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     const username = "rashid"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     const username = "rashid"
//     console.log(this.username);
// }

const chai = () => {
    const username = "rashid"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))

// const myArr = [1, 2, 3, 4]

// myArr.forEach()