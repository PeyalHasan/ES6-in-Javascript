
// Default parameter
function add(a=99, b=87){
    // console.log(a+b);
}



//
const first = 'Jaan';
const last = 'Pakhi';
const greet = 'Potas potas'; 

const result = `${first} ${last} ${greet}`;
// console.log(result);

const challenge = `
John cena 
chena naki ochena 
mari dimo kinto`;
// console.log(challenge);


///// Function expression
 function add(a,b){
    return a+b;
 }

////Function declaration
function addition(a,b){
    const result = a + b;
    return result;
}

//// Arrow function 

const add = (a,b) => a+b;
const getAge = person => person.age;

const getPI = () => Math.PI;
console.log(getPI());
