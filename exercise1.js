//In this exercise we need cover all possible cases thats why we should make random length of array from 0 to the biggest amount of elements in array in JavaScript(4294967296)


//const n = Math.floor(Math.random() * 4294967296);
//const arr1 = [...Array(n - 1).keys()];

const sumOfNumbers = (arr) => {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 5 === 0 && arr[i] % 7 !== 0) {
               sum += arr[i];
          }
     }
     return sum;
}

const amountOfNumbers = (arr) => {
     let amount = 0;
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 5 === 0 && arr[i] % 7 !== 0) {
               amount += 1;
          }
     }
     return amount;
}




module.exports = {sumOfNumbers, amountOfNumbers};







