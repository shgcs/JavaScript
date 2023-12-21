//object known as property called prototype
let a = {
    name1: "heery",
    language: "JavaScript"
}
console.log(a);

let p = {
    run: () => {  
        //alert("run")
        console.log("JS");
       
    },

}

a.__proto__ = p;//__proto__ allow to access to object key for value in both object to do print and useful for methods
p.run()
//a.run()

p.__proto__ = {     //third object
    name2: "Jackie"
}

console.log(a.name2)//it would be print in a object because of p object allow in a object although we allow to third object in p object it's not recommanded
console.log(p.name2)//It's recommanded