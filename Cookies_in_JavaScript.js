//cookie is way to store the data in browser
console.log(document.cookie);
document.cookie = "name=herry112233";
document.cookie = "name=herry1122336";
document.cookie = "name=herry";

let key = prompt("enter your key");
let value = prompt("enter your value");

//document.cookie = `${key}=${value}`;
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;//encodeURIComponent("value") used to encode the special character
//decodeURIComponent("encode_of_value") used to decode the special character

console.log(document.cookie);
//special character usually not take directly in cookie so for that need to use methods
//cookies not replace they just add
//can't use/set data than 4kb in key=value pair or name=value pair
//should set cookies upto 20 or under the 20 and it depends upon the browser