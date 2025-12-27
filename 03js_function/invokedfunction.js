// (function chai()
// {
//     console.log(`db connected`)
// })()

// agar Agar mujhe immediately koi function ko invoke karna ho to parenthesis kayuu karke function banaling Ferusko parenthesis say call kalenge () -- define () -- caling
// Global scope ke pollution se problem hoti function  invoke Karte Hain Phansan ko with the parenthesis global global variables with
(function chai()//named IIFE
{
    console.log(`db connected`)
})();//; yeh used hots hai batane ke liye kaha tak context hai

( (name) => //UNNAMED IIFE
{
     console.log(`db connected with two ${name}`)
})(`avi`)