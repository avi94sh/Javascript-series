//for of
// ["","",""]
//[{},{},{}]


// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }       

// const greeting = "hello world"
// for(const greet of greeting){
//     console.log(`each character: ${greet}`);
// }

//maps
const map = new Map()//map is key value pair


map.set("name", "John")
map.set("age", 30)
map.set("city", "New York") 
// console.log(map);

// for(const [key, value] of map)
// {
//     console.log(key, ':-',   value);
// }
for(const key of map.values())

{
    console.log("key is :", key);
}

// const obj = {
//     name: "Alice",
//     age: 25,
//     city: "Los Angeles" 
// }
// for(const [key, value] of obj)
// {
//     console.log(key, ':-',   value);
// }
//object is not iterable by for of



