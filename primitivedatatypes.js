//nn bb ss u   primitive datatype
//null number boolean BigInt symbol string undefined  
let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Herry";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof f);

//objects non primitive datatype
//objects
const item = {
  1: true,     //key value
  "john": false,
  "lovish": 67,
  "rohan": undefined

}

console.log(item[1]);
console.log(item["john"]);
console.log(item.john);
