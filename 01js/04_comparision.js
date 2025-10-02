//comparision
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);




// console.log("2" > 1);
// console.log("01" > 2);
// console.log(3 > "2")
// 🧠 Summary: Does JavaScript convert types during comparison?
// Yes! When using comparison operators like >, <, >=, <=, JavaScript automatically converts strings to numbers if the other operand is a number. This is part of its type coercion behavior.

//console.log(null > 0);//null is converted 0 number
// console.log(null == 0);- == checks for loose equality without converting null to a number.

// console.log(null >= 0);null to 0 coercion behavior.



// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


//undefined to number value give Nan
// let abc;
// let num33=Number(abc);
// console.log(num33)

//=== is strictly equility conversion

console.log("2" === 2);