let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");

    }, 11000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("value 2");
        reject(new Error("ERRROR"))
    }, 1000)
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");

    }, 2000)
});


/*
p1.then((value) => {
    console.log(value);
});

p2.then((value) => {
    console.log(value);
});

p3.then((value) => {
    console.log(value);
});
*/

//Promise class methods
//let promise_all = Promise.all([p1,p2,p3]);//used to display the all promise value paralley as array  
let promise_all = Promise.allSettled([p1, p2, p3]);//used to display status and value
//let promise_all = Promise.race([p1,p2,p3]);//used to display the value who first resolve/reload
//let promise_all = Promise.any([p1,p2,p3]); //used to display the value who first resolve/reload but if in that return reject then display the next first value 
//let promise_all = Promise.resolve(6);
//let promise_all = Promise.reject(new Error("ERROR"));

promise_all.then((value) => {
    console.log(value);
})