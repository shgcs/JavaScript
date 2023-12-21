
let x = function (e) {
    console.log(e.target);//return tag where you click on that
    console.log(e);//e is pointer event
    console.log(e.type);//return event type
    console.log(e.currentTarget);
    //alert("hello world 1");
    console.log(e.clientX);//return number where you click on that 
}


let y = function (e) {
    alert("hello world 2");
}


btn.addEventListener('click', x);
btn.addEventListener('click', y);



//let a = prompt("enter the number");
if (2 == 2) {
    btn.removeEventListener('click', x);//x is function object 
}
