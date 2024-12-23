
//// Use of spread operator 

const max = Math.max(23, 54, 33, 543, 64, 64);
// console.log(max); 
// it will show the maximum number from the list of numbers. 

const numbers = [23, 54, 33, 53, 51, 64, 34]
// console.log(numbers);
const max1 = Math.max(numbers);
// console.log(max1); 

////NaN because it is an array not a number  so we have use spread operator to solve this problem. 


const max2 = Math.max(...numbers);
// console.log(max2);
// 
//  // it will show the maximum number from the array.



//// Use of reset operator  rest operator is used to pass a variable number of arguments to a function. 
// create a reset operator in arrow function 
const sum = (...args) => {
    // console.log(args); // it will show an array of all the arguments that we passed in the function.
}
sum(1,2,3,4,5,6,7,8,9,10)

// use spread operator to copy an array

const friends = [1,2,3,4,54,6,43,34];
const bondhu = friends;
console.log(`friends:`, friends);
const dosto = [...friends]; // it will copy the array.
friends.push(100);
console.log(bondhu);
console.log(friends); // it will show the updated array.
console.log(dosto); // it will show the original array because we use spread operator to copy the array.


