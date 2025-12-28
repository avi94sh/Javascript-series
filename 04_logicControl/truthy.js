const userEmail = ''

if(userEmail)
{
    console.log("got user email" )
}
else{
    console.log("dont have user email")
}

//falsey values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// [],{},"0",'false'," ", function(){}

// if (userEmail.length === 0)
// {
//     console.log("array is empty")
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0)
{
    console.log("object is empty")
}

// Nullish coalescing operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 14
val1 = null ?? 10 ?? 20
console.log(val1)

//terniary operator

//conditon ? true : false

const iceTeaPrice =90;
iceTeaPrice >=90 ? console.log("gressther") : console.log("less then")