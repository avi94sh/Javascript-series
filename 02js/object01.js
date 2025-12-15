//singleton
//object.create

//object literals
const sym = Symbol("key1");
const JsUser = {
    name :"aviansh",
    age: 20,
    [sym]:"abeer",
    email :"aviansh1@email.com",
    location:"jaipur",
    isLoggedin:false,
    lastLogInDays:["monday","sundaty"]


}

//two way to accaes the key value of object
// console.log(JsUser.email)
// console.log(JsUser["email"])
//accses to symbol in object fisrtly declare outside then acces in object
// console.log(JsUser[sym])


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) iske bad change nhi hoga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());