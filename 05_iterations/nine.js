const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc value: ${acc}, currval is ${currval}`);
//     return acc+currval
// } , 0 )

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js couse",
        price: 2999
    },
    {
        itemName: "py couse",
        price: 999
    },
    {
        itemName: "mobile dev couse",
        price: 5999
    },
    {
        itemName: "data science couse",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price 
}, 0 )

console.log(priceToPay);