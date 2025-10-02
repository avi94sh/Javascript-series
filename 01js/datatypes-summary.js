//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// let name=null;
// console.log(name, typeof name);

// const score=100;
// const scoreValue=100.3;
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId)

const id1 = Symbol.for('123');
const anotherId1 = Symbol.for('123');
console.log(id1 === anotherId1); // true

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros)
let myObj = {
    name: "hitesh",
    age: 22,
}

const myfuntion= function(){
    console.log("Hello world");
}

console.log(typeof anotherId);