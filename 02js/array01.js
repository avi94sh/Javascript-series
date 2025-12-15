// const array1=[1,2,3,4]

// // console.log(array1);
// // array1.push(8)
// // console.log(array1)
// // array1.pop();
// // console.log(array1)
// array1.unshift(88)
// console.log(array1)

// array1.shift()

// console.log(array1);//this shift reomve fisrt elemntof array

const marvel_hero=["thor","black","iron man"];
const dc_hero=["superman","aquaman","batman"]
//i want to add this dc arrayin to marvel like one array

// marvel_hero.push(dc_hero)//here dc array ittake as array as element
// console.log(marvel_hero)

// const abeer=marvel_hero.concat(dc_hero)
// console.log(abeer);
//here ... this is spread opertor that break the array into element
// const all_heroes=[...marvel_hero,...dc_hero]
// console.log(all_heroes)

console.log(Array.isArray("aviansh"))//to check
console.log(Array.from("heroes"))//conert into array
console.log(Array.of(1,2,3))


let score=100;
let score2=200;
console.log(Array.of(score,score2))//it is used to let all elmet in to array