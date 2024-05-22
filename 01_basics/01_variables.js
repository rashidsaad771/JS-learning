const accountId = 22451
let accountEmail = "rashid@gmail.com"
var accountPassword = "123456"
accountCity = "muridke"
let accountState;


// accountId = 111 // not allowed to assign other to const variable


accountEmail = "saad@google.com"
accountPassword = "98765"
accountCity = "lahore"


console.log(accountId)

/*
Prefer not to use var
because issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);