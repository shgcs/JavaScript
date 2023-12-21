class Employee {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} Employee's constructor is here`);
    }
}

class Programmer extends Employee {
    /*
    constructor(...args){
        super(...args)  
    }
    */

    //if you override to the constructor then need to use super constructor
    
    constructor(name) {
        super(name)   // super constructor is must whenever you wants to access the both constructors with one object
    this.name = name;
        console.log(`${name} Employee's constructor is here and This is newly written constructor`);
    }
}

let ee = new Employee("herry2");//here prevoius class constructor also would be called automatically when we create the object 

let e = new Programmer("herry");//here prevoius class constructor also would be called automatically when we create the object 
//constructors overriding also in js


