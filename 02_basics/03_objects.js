// singletone
// Object.create


// object literals

const mySym = Symbol("mytesk")

const JsUser = {
    name: "Rashid",
    "full name": "Rashid Saad",
    [mySym]: "mytask1",
    age: 24,
    city: "Muridke",
    email: "rashid@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rashid@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rashid@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());