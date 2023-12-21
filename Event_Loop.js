//Event Loop is part of under the loop

//JS single threaded,non blocking,asynchronus
//V8 is the JavaScript runtime 

setTimeout(() => {
    console.log("JS");
}, 2000);

console.log("hi");

setTimeout(() => {
    console.log("this is JS");
}, 5000);

console.log("this is loop");

//call stack "hi" , "this is loop" ,after callback queue "JS" , "this is JS"
//web apis  "JS" , "this is JS"
//callback queue  "JS","this is JS" then push in call stack