let p1 = new Promise((resolve, reject) => {

    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am promise and I am fulfilled");
        resolve(true);
    }, 5000);

})


//if you not used to resolve or reject then this state would be pending

let p2 = new Promise((resolve, reject) => {

    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am promise and I am rejected");
        reject("hello")//new Error("I am an error"));
    }, 5000);

})

//this two setTimeout() run parallay  and this is the use of Promises
//console.log(p1,p2);

//used to print the value
p1.then((value) => {
    console.log("1");
    console.log(value);
}, (error) => {
    console.log("2");
    console.log(error);
})

//catch() used to change to error or messaging
p2.catch((error) => {
    console.log("some error occured in p2");
})

p2.then((value) => {
    console.log("1");
    console.log(value);
}, (error) => {
    console.log("2");
    console.log(error);
})

