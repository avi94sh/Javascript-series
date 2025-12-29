// reduce function
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myTotal = myNums.reduce( function (acc, currentValue)
// {
//     console.log(`accumulator : ${acc}  currentValue : ${currentValue}`);
//     return acc + currentValue
// } , 0)

// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, currentValue) => acc+ currentValue, 0)

// console.log(myTotal);

const shoopingCart = [
    {
        itemName : "laptop",
        price : 30000,
    },
      {
        itemName : "mobile",
        price : 300002,
    },
      {
        itemName : "table",
        price : 10000,
    }


]

const priceToPay=shoopingCart.reduce((acc,item) =>acc + item.price, 0
)
console.log(`total price to pay is : ${priceToPay}`);   