/*
let a = (e) => {
    alert("c++");
}

let b = (e) => {
    alert("python");
}

let c = (e) => {
    alert("java");
}

let aa = document.getElementById("id1");
let bb = document.getElementById("id2");
let cc = document.getElementById("id3");

aa.addEventListener('click', a);
bb.addEventListener('click', b);
cc.addEventListener('click', c);
*/


/*
let a = document.getElementById("id1").getAttribute("href");
let b = document.getElementById("id2").getAttribute("href");
let c = document.getElementById("id3").getAttribute("href");

let arr = [];

arr.push(a);
arr.push(b);
arr.push(c);

console.log(arr)
*/

/*
let arr = [];

let a = function (e) {
    let aa = document.getElementsByTagName("a")[0].getAttribute("href");
    arr = arr + arr.push(aa); 
    alert(typeof aa);
}
let b = function (e) {
    let bb = document.getElementsByTagName("a")[1].getAttribute("href");
    arr = arr + arr.push(bb);
    alert(bb);
}
let c = function (e) {
    let cc = document.getElementsByTagName("a")[2].getAttribute("href");
    arr = arr + arr.push(cc); 
    alert(cc);
}


document.getElementsByTagName("a")[0].addEventListener('click', a)
document.getElementsByTagName("a")[1].addEventListener('click', b)
document.getElementsByTagName("a")[2].addEventListener('click', c)

console.log("push array", arr)
*/

/*
let arr1=[2,4,3];//342

let a=arr1.reverse();

let c="";
for(let i=0;i<arr1.length;i++){
 c = c + (a[i].toString()); 
}

let w=Number.parseInt(c);

w=w.toString();
console.log(w);

let l=[];
for(let i=0;i<arr1.length;i++){
    l.push(w[(arr1.length-1)-i]);
   
}
console.log(l)
*/


/*
let l1 = [2,4,3];
let l2= [5,6,4];
let a=l1.reverse();

let c="";
for(let i=0;i<l1.length;i++){
 c = c + (a[i].toString()); 
}

let w=Number.parseInt(c);
console.log(w);
    

    
    
let x=l2.reverse();

let y="";
for(let j=0;j<l2.length;j++){
 y = y + (x[j].toString()); 
}

let z=Number.parseInt(y);
console.log(z);
    
    
    
    
    
let total = w + z;
    total=total.toString();
    
let l=[];
for(let k=0;k<total.length;k++){
    l.push(Number.parseInt(total[(total.length-1)-k]));
   
}


console.log(l)
*/

/*
let a = (i) => {
    console.log(i);
    
      let aa=  document.getElementsByTagName("a")[i];
      console.log(aa);
    
}
for (let i = 0; i <= 2; i++) {
    setTimeout(a, 5000, i);
}
*/

let a =  (e) =>{

   // document.getElementById("id1").classList.toggle("www");
   // document.getElementById("id2").classList.toggle("ww");
      document.getElementById("b1").classList.toggle("w1");


}

setInterval(a, 300);

let b =  (e) =>{

    // document.getElementById("id1").classList.toggle("www");
    // document.getElementById("id2").classList.toggle("ww");
       document.getElementById("b1").classList.toggle("w2");
 
 
 }
setInterval(b, 300);







