/*
let promise = new Promise(function (resolve, reject) {
    alert("hello")
    resolve(56)
})


console.log("hello one");

setTimeout(function () {
    console.log("hello two in 2 seconds")

}, 2000);

console.log("my name is " + "hello three");

console.log(promise)
*/


let p = new Promise((resolve, reject) => {

    //promises used to parallel execution,display the state fulfilled,pending,rejected with value and reason to telling order/query fulfilled or not
    //resolve() callbacks used to display by default error if error occure/not fulfilled with state:fulfilled,pending,rejected
    //reject() callbacks used to manual error display with state:rejected


    let number = false;
    if (number) {
        resolve("ok");
    }
    else {
        reject(new Error("occure the error"));
    }





    /* console.log("promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled")
        resolve(true)
        //reject(new Error("errorrrr"))
    }, 5000)*/

});
console.log(p);

