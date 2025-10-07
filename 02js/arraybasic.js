//array
// let mark1=100;
// let mark2=40;
// let mark3=70;
// let mark4=89;

//let make variable that conain all
// let marks=[100,50,80,99]

// console.log(marks);
// console.log(marks.length)

// let arr = ["marjs",1,2,3,4,4,true]
// console.log(arr);

//access the particular index element

// console.log(arr[0]);

// console.log(typeof arr)
//non primtive datatype value can change theire value
// arr[1]=90;
// console.log(arr)

//push the value in end of arr
// arr.push(900)
// arr.push("stike")
// console.log(arr);

//elemmt to delest which is last elemnt is pop opertaion

// arr.pop()
// console.log(arr)

//startinmh me add or delete kar sakte hai

// arr.unshift(10);
// arr.unshift(67);
// console.log(arr)

//delete kar sakta satarting wale ko

// arr.shift()
// console.log(arr)
//this is not best way

//iterate over array

// let arr2=["hee",1,2,3,4,5];
// for(let i=0; i<arr2.length; i++)
// {
//     console.log(arr2[i]);
// }

// for(let num of arr2)
// {
//     console.log(num)
// }

//copy b y refernece
// let arr=[1,2,3,4,5];
// let arr2=arr;
// arr2.push(78);
// console.log(arr)

// const arr=[1,2,3,3,4];
// arr[3]=7

// console.log(arr)

// const arr=[1,2,3,3,4];
// const arr2=arr.slice(2,4);
// console.log(arr2);//slice se ham trim karte hataate nhi hai original array se
// console.log(arr)
// const arr3=arr.splice(1,3,"rho",56)
// console.log(arr)
// console.log(arr3)



// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// arr.push(arr2);
// const arr4 = [90,4,false];
// const arr3 = arr.concat(arr2,arr4);

// const arr3=[arr,arr2,arr4]
//spread opetartor
// const arr3=[...arr,...arr2,...arr4]
// console.log(arr3)



// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie"];//due to asCci value

// console.log(names.toString());
// console.log(names.join("-"));


// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs")); false and true

// names.sort()
// names.reverse()

// console.log(names)

// const a = ["101","90","80","32","91"];
// const arr = [10,"Rohit","Mohan",true];
// arr.sort()

// console.log(arr)


// const arr= [10,40,31,71,5,11];
// -ve : pehle a aayega fr aayega
// +ve: b aayega fr a aayge


// arr.sort((a,b)=> a-b);
// console.log(arr)
// ascending order

// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31
// arr.sort((a,b)=> b-a);
// console.log(arr)

// +ve : pehle a aayega fr aayega
// -ve: b aayega fr a aayge
// const arr=[10,30,50,[40,90,[11,30,40],11],80];
// console.log(arr[3][2][1])
// const A=arr.flat(Infinity);
// console.log(A);


const a = [10,309,"Rohit",9.3, true];
a.name=999;
console.log(a[5]);