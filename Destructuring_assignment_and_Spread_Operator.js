
//Spread Operator
//...name_of_the_variable
//used on list of array_elements/object_keys

let arr = [3, 5, 6, 7, 8];
//let [a,b,c, ...rest] = arr;//here ...rest spread operator used to take to the remaining values of array
//here a,b,c is destructuring assignment

//instead of this
//let a = arr[0];
//let a = arr[1];


//on Array
//let [a,, ...rest] = arr; //here a is destructuring assignment
//console.log(a,rest); 


//on Object
//let {a,b} = {a:1,b:5};
//console.log(a,b);


//Spread Operator
let arr1 = [3, 4, 5];
let obj1 = { ...arr1 } //convert in key value pair in object
console.log(obj1);


function sum(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(sum(...arr1));


let obj2 = {
    name: "herry",
    company: "company herry",
    address: "xyz"
}
console.log({ ...obj2, name: "john" });  //override to the value
console.log({ name: "john", ...obj2 });  //not override to the value
