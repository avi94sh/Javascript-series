// function sayMyname(){
//     console.log("a");

// }
// sayMyname()

// function addNumber (number1, number2) // parameter
// {
//   console.log(number1+number2)
// }



function addNumber (number1, number2) // parameter
{
 let num = number1 + number2;
 return num
 console.log("heihsh")
}


const result = addNumber(3,6)//argument
// console.log("result :", result)

function loginUserMessge(username  = "avi")
{
    if(username === undefined)
    {
        console.log("pls fistly enter a username")
        return
    }

    return `${username}just logged in `
}
console.log(loginUserMessge())//jab mai koi value pass nhi kiya to undefine aayega


// retrun kar diye to uske bad koi excetue nhi hoga


//shoping cart

function calculateCarPrice(value,...num1)// rest opertaor take all value input and group into into array
{
   return num1;
}

// console.log(calculateCarPrice(200,400,667))


const user =
{
    username :"histesh",
    prices : 199
}

function handleObject(anyobject)
{
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`) 
}
// handleObject(user)

// pass object in function direct
handleObject({
    username : "sam",
    price:399
})

const newArray = [200,300,400, 100, 600]

function returnSecondElemnt(mynewArray)
{
    return mynewArray[1]
}
// console.log(returnSecondElemnt([100,200,3000,33]))
// console.log(returnSecondElemnt(newArray))

//funtion scope


