//object
// const user={
//     //here every key is stored is as string
//     name:"avinash",
//    "age":20,
//     emailId:"amo@gmail.com",
//     amount:26366,
//     "home address":"up"
// }
// console.log(user.age)
// console.log(user["age"])


// console.log(typeof user)
// console.log(user.name)

//crud opration

//insert and update
// user.aadhar=1234;
// user.amount=786900;
// console.log(user);

//delete
// delete user.emailId;
// console.log(user)


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user)
// {
//     console.log(keys,user[keys])
// }

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const name=user.name;
// const age=user.age;
// const {name:userName,age:userAge}=user;
// console.log(userName,userAge)

// const arr=[10,29,30,40];

// const [first,second]=arr;
// console.log(first,second)


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }
//for of loop array
// const temparr=Object.keys(user)
// for(let [keys,values] of Object.entries(user))
// {
//     console.log(keys,values)

// }

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }
// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);


//

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    address: {
//       city:"jaunpur",
//       state:"up"
//    }

// }
// console.log(user.address.state)
//shalawo copy
// const user2={...user};
 // user2.name="mohan";
// user2.address.city="varansi";
// console.log(user)
// console.log(user2)


//deep copy
// const user2=structuredClone(user)
// user2.address.city="varansi";
// console.log(user)
// console.log(user2)

//keys ; string || symbol
// const sym=Symbol("id")
// const user = {
//    name: "Rohit",
//    age: 20,
//    0: "negi@gmail.com",
//    2:"ghjh",
//    [sym]:"hello"
   

// }
// console.log(user[sym])


 