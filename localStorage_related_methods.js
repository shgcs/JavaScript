//localStorage.setItem("value","value");
//if you refresh the page nevertheless data is store in localStorage

let key = prompt("enter key you want to set");
let value = prompt("enter value you want to set");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
/*
if (key == "red" || key == "blue") {
    localStorage.removeItem(key);
}

if (key == 0) {
    localStorage.clear();
}
*/
console.log(localStorage.length);
console.log(localStorage.key("index_number_of_key")); 
//localStorage.name_of_key;



