
function show(){
    // console.log(this);
}
show(); //window object

const show1 = () =>{
    console.log(this);
}
show1();

//// Use of spread operator 

const max = Math.max(23, 54, 33, 543, 64, 64);
console.log(max);

const numbers = [23, 54, 33, 53, 51, 64, 34]
console.log(numbers);
const max1 = Math.max(numbers);
console.log(max1);//NaN because it is an array not a number  so we have use spread operator to solve this problem. 
const max2 = Math.max(...numbers);
console.log(max2);

//// Use of reset operator  rest operator is used to pass a variable number of arguments to a function. 
// create a reset operator in arrow function 
const sum = (...args) => {
    console.log(args);
}
sum(1,2,3,4,5,6,7,8,9,10)
