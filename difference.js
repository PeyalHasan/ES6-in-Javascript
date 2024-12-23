
function show(){
    // console.log(this);
}
show(); //window object

const show1 = () =>{
    // console.log(this); // it will show an empty object because arrow function does not have its own this keyword. 
}
show1();

