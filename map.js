const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

// //calling map method on numbers array
// const newNums = numbers.map((item) => {
//     return item + 2
// })
// console.log(newNums);

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // Using map of map
// const doubled = numbers.map(row =>
// {
//     return row.map(num => num * 2);
// }
// );

// console.log(doubled);
// he map() method is used on arrays to transform each element using a callback function, and return a new array with the transformed values.


const newNums = numbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 50);

console.log(newNums);
// Chained map methods allow for multiple transformations on an array in a concise manner.  
