//local scope
//block scope
//function scope
//global scope

let p = 9;
function a() {
    let a1 = 8;
    console.log(a1);
    console.log(p);
}
a();
//console.log(a1);
console.log(p);

