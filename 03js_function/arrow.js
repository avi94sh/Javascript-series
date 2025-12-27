// arrow function
//this keyword is user accces the context in object
const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function()
    {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="aviansh"
// user.welcomeMessage()

// console.log(this)

//global object is window object in console

// const abc = null
// console.log(typeof(abc))

// function chai()
// {
//     let username = "sam"
//     console.log(this.username)
//     //function me use karne me udefined ata this keyword se
// }
// chai()

// const chai = function ()
// {
//     let username = "sam"
//     console.log(this.username)
   
// }
//regular function
const chai = () =>
{
    let username = "sam"
    console.log(this)
   
}
// chai()



// const adtwo= (num1,num2) =>
// {
//    return num1 +num2
// }

//implicit ME  return likhne jaruRAT NHI HOTI USKE JAGA ()

// {} THEM RETURN LIKHNA HOGA BUT {} YEH USER NHI KIYA TO RETURN KEYWORD USE NHI HOGA

// const adtwo= (num1,num2) => num1 +num2

//() LIKHENGE TO RETURN USE NHI KRANEG and return karne liye ()

// const adtwo= (num1,num2) => (num1 +num2)

const adtwo= (num1,num2) =>({username : "hitesh"})

console.log(adtwo(2,3))

const mynewArray1= [1,3,4,4]
