//console.log(id1)

//let id1 = document.getElementById("id1");//[0].style.background = "red";//. for class and # for id
let sp1 = document.getElementById("sp1");//.style.background = "green";//his changes reflict automatically without print the statement 
//console.log(id1);
let id1 = document.getElementById("id1");
let class1 = document.getElementsByClassName("box")[0];//[0] for denoting the first div tag

/*
but this should be in same tag then true :
id and id=true
class and class=true
id and class=true
class and id=true*/


console.log(id1.matches("#id1")); //css selector match or not
console.log(class1.matches(".box"));
console.log(id1.matches(".box"));
console.log(class1.matches("#id1"));


console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));
console.log(id1.closest("#sp1"));


console.log(sp1.contains(sp1));//if does contain then true
console.log(id1.contains(sp1));
console.log(sp1.contains(id1));



