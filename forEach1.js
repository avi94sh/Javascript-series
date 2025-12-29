// const coding = ["html", "css", "js", "react"];

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((nums) => {

//      return nums > 4
// } )

// const newNums = []
// myNums.forEach((nums) => {
//     if (nums > 4) {
//         newNums.push(nums);
//     }
// } )
// console.log(newNums);


const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publisher: "George Allen & Unwin",
    publishedDate: 1988
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publisher: "Secker & Warburg",
    publishedDate: 1956
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publisher: "Bloomsbury",
    publishedDate: 1988
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publisher: "Charles Scribner's Sons",
    publishedDate: 1925
  }
];

const userbook = books.filter((book) => 
    {
        return book.genre === "Fantasy"
    })
const userbook2 = books.filter((book) => {
    return book.publishedDate >= 1950  && book.genre === "Fantasy"     
})
console.log(userbook2);
