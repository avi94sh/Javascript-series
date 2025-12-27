// let a=19;
// const b=99;
// var c = 300;
let a =88;
if (true)
{
    let a=19;
    const b=99;
    // var c = 30; // var b;ock scope problem
    // console.log("inner value of a: ", a)
}

// console.log(a)
// console.log(b)
// console.log(a)

//inner function outer function ke varible ko accses kar sakta hai
function one ()
{
    const username = "momo";

    function two()
    {
        const website = "youtube";
        console.log(username)

    }
    // console.log(website)
    two()
}

// one()

if (true)
{
    const username = "hitesh"
    if(username === "hitesh")
    {
        const website = " youtube "
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//note
console.log(addone(4))

function addone(num)
{
    return num + 1;
}

addtwo(8)
// second way delacre the function and stoed in to variable
const addtwo = function(num)
{
    return num +2
}
