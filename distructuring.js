
const actor = {
    name: 'Tom Cruise',
    age: 56, 
    phone: '0170000000',
    money: 1000000000,
}
// Distructuring object
const {name, age, phone} = actor;
console.log(name, age, phone);

const {age:boyos} = actor;
console.log(age)// it will show the age of the actor. 
console.log(boyos); // it will show the age of the actor.

////
// create an arrow function with distructuring object
const actorInfo = ({name, age, phone}) => {
    // console.log(`Actor name is ${name}. He is ${age} years old. His phone number is ${phone}`);
}
actorInfo(actor);
// it will show the information of the actor.
// Actor name is Tom Cruise. He is 56 years old. His phone number is 0170000000


const glass = {
    name: 'Sun Glass',
    color: 'black',
    price: 500,
    isCleaned:true,
}
console.log(glass); // it will show the object of glass.

const keys = Object.keys(glass); // it will show the keys of the object.

console.log(keys); // it will show the keys of the object.
const values = Object.values(glass); // it will show the values of the object.

const entries = Object.entries(glass); // it will show the key value pairs of the object.

delete glass.isCleaned;

Object.freeze(glass); // it will freeze the object.
glass.price = 1000; // it will not update the price of the object because we freeze the object. 
//seal in the object
Object.seal(glass); // it will seal the object. 
glass.price = 1000; // it will update the price of the object because we seal the object.
console.log(glass); // it will show the object of glass.
