class Animal {
    constructor(name) {
        this._name = name;
    }

    fly() {
        console.log("JS");
    }

    get name1() {
        //get method used to call the method as a just variable
        return this._name;
    }
    set name1(newName) {
        //set method used to set the value
        return this._name = newName;
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating carrot");
    }
}


let a = new Rabbit("Bruno");
a.fly();

//get method
console.log(a.name1);//can call method_name as a just variable

//set method
a.name1 = "Jack";//set the value
console.log(a.name1);


console.log(a instanceof Animal);//instanceof used to check this is class object or not

console.log(a instanceof Rabbit);
