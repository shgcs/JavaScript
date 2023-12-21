/*let a=[91,82,63,84,null,false,"not present"];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);//undefined because index 7 doesn't exists
console.log(a.length);

a[6]=96;

console.log(a,typeof a);//arrays are mutable so can change or update

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}*/


//let cpu=["S","V","G"][1]//[1] is the denote to the element index


/*
let num=[1,2,3,34,8];
let b=num.toString();//convert into string
console.log(b);

let c=num.join("_");//1_2_3_34_8
console.log(c);

let r=num.pop();
console.log(num);//8 is remove at last index

console.log(r);//return pop element


let w=num.push(56);
console.log(num);//56 is add at last index

console.log(w);//return new length


let rr=num.shift();
console.log(num);// 1 is remove at first index
console.log(rr);//return shift element

let ww=num.unshift(78);
console.log(num);// 78 is add at first index
console.log(ww);//return new length
*/
 

//delete operator
//let num=[1,2,3,4,5,6,7,8,9];
//let num_more=[11,12,13,14,15,16,17,18,19];
//delete num[0];
//console.log(num.length);//modify array length not change

//let new_Array=num+num_more;//concatanation  string type
//let new_Array=num.concat(num_more);//object type
//console.log(typeof new_Array);



/*
let num2=[31,12,23,24,35,16,17,18,39];
let compare=(a,b)=>{
    //return a-b;//for sort ascending order
    return b-a;//for sort descending order
}
num2.sort(compare);//sort ascending order
//num2.sort()//only sort alphabetically
console.log(num2);*/

/*num2.reverse();//just return to the main array into the reverse order not descending order
console.log(num2);*/


//splice and slice
//splice
/*num3.splice(2,3,1111,2222,3333);//(index,how much delete,elements to add instead of this)
let deleted_element=num3.splice(2,3,1111,2222,3333);
console.log(num3);
console.log(deleted_element);
*/

//slice
/*let num4=[31,12,23,24,35,16,17,18,39];
let new_array=num4.slice(3,5);//delete from 3 to 5 index element

let new_array=num4.slice(3);//delete the first 3 element and then create new array and this method can't modify to main array 
console.log(new_array);//changes only shows only in the another new array variable
*/

/*
let points=[3,5,2,1,3,7,8,5];
let a=function(a, b){return a - b}//local function, function is keyword and method name also
points.sort(a);
console.log(points);

function aa(a){//global function, function is only keyword
    return a;
}

let aa= (a) => {
    return a;
}*/


//let num5=[3,54,1,2,4];

/*
for(let i=0;i<num5.length;i++){
    console.log(num5[i]);
}
*/

//forEach loop
/*num5.forEach((element) =>{
    console.log(element);
})*/



/*
let name="herry";
let arr=Array.from(name);//can create the array from string by seperating the string element
console.log(arr);
*/

/*
for(let i of num5){
    console.log(i);
}

for(let i in num5){
    //console.log(i);//print index only
    console.log(num5[i]);//return element
}*/


//array map method  create new array
let arr=[45,23,21];
let a = arr.map((value,index,array) => {//value,index,array
    //console.log(value,index,array);
    return value+1;
})

console.log(a);//create new array from map method()  by using changes in existing array


//array filter method
let arr2 = [45,21,23,0,3,5];
let a2 = arr2.filter((a) => {//value,index
    return a<10;//if condition is true then print otherwise not 
})
console.log(a2);//[0,3,5]


//array reduce method 
let arr3 = [1,2,3,5,2,1];
let newarray = arr3.reduce((h1,h2) => {//value1,value2
    return h1+h2;// 1 and 2 =3   3 and 3=6  6 and 5=11 11 and 2=13  13 and 1=14
})//return only last one final value
console.log(newarray)





