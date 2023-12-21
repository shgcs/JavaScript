/*
//syncronus programming
let a = prompt("enter fruite name");
let b = prompt("enter color name");
let c = prompt("enter id");

console.log(a + "  " + b + "  " + c);
*/

/*
//asyncronus programming
console.log("start");
setTimeout(function(){
    console.log("Hey heery")
},3000)
console.log("end");
*/


//callbacks
function loadScript(src, callback1, callback2) {//url or src
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("SRC: " + src)//if script src is valid then print otherwise not
        callback1(null, src);
        // callback2(src);
    }
    script.onerror = function () {//print when script is not valid
        console.log("error loading script with SRC: " + src);
        callback1(new Error("Src got some error"))//print the error messeage
    }
    document.body.appendChild(script);
}

//loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")


function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("heery " + src);
}

function goodmorning(src) {
    alert("goodmorning " + src);
}


loadScript("browserr.js", hello, goodmorning);