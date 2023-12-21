//let class1=document.getElementById('nav1').firstElementChild.firstElementChild.style.color="blue";
//console.log(class1);

/*
let id2 = document.getElementById("div2").firstElementChild.style.color = "green";
let id3 = document.getElementById("div2").lastElementChild.style.color = "green";

console.log(id2);
console.log(id3);*/


let nav1 = document.getElementById("nav1").firstElementChild.style.background="cyan";

console.log(nav1);

(Array.from(document.getElementById("nav1"))).forEach((element) =>{
 element.style.backround="cyan";
})
//auto correction with tbody if not taken
