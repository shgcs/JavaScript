let a=1;
let b=2;
let c=3;

function onePlusAvg(x,y){
    return Math.round(1+(x+y)/2);
}

//arrow function
const sum = (p,q)=>{
    return p+q;
}

const sum2 = (p,q)=>{
    console.log(p+q);
}


console.log(onePlusAvg(a,b));
console.log(onePlusAvg(b,c));
console.log(onePlusAvg(c,a));
//console.log(sum(1,3));
//sum2(1,3);


//function creation ways:
//traditional function
//arrow function
//direct traditional function //here don't need to write function name
//direct arrow function   //here don't need to write function name


