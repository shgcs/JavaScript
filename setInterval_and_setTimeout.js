alert("hello");

const sum = (a, b, c) => {
    console.log("I am running" + (a + b + c));

}

setTimeout(sum, 1000, 1, 2, 7);//function name,time second/limit,arguments...

/*let w = setInterval(function(){
  alert("setinterval");
},3000);//run constantly
*/
//clearInterval(w);//stop to setInterval


let w = (a, b, c) => {
    console.log("I am running" + (a + b + c));

    
}

setInterval(w, 3000, 1, 2, 7);











/*
let a = setTimeout(function () {
    alert("I am inside of settimeout")
}, 3000);

let b=prompt("do you want to run the settimeout?");
if("no"== b){
clearTimeout(a);//stop to setTimeout()

}

console.log(a);
*/