/*c
lass ComplexNumber{

    constructor(){
          let realNo = prompt("enter the Real Number: ");
          let imaginaryNo = prompt("enter the Imaginary Number: ");
          let number = realNo + "+" + imaginaryNo; 
         return ComplexNumber.getComplexNumber(number);
    }

    static getComplexNumber(ComplexNo){
        console.log("The Complex Number : ",ComplexNo);
    }


}

let obj1 = new ComplexNumber();
let obj2 = new ComplexNumber();
*/



/*
class Human {
    name() {
        console.log("This is Human");
    }
}
class Student extends Human {
    name() {
        console.log("This is Student");
    }
}

let obj1 = new Human();
let obj2 = new Student();

console.log(obj2 instanceof Human);
obj1.name();
obj2.name();
*/



/*
class ComplexNumber {

    set RealNo(no1) {
        this.number1 = no1;
    }

    set ImaginaryNo(no2) {
        this.number2 = no2;
    }

    get ComplexNo() {
        return this.number1 + "+" + this.number2;
    }

}

let obj = new ComplexNumber();
obj.RealNo = prompt("enter the Real Number: ");
obj.ImaginaryNo = prompt("enter the Imaginary Number: ");
obj.ComplexNo;
*/



/*
class ComplexNumber{

    constructor(real,imaginary){
        this.real = real;
        this.imaginary=  imaginary;
    }

    add(num){
        this.real = this.real + num.real;
        this.imaginary=  this.imaginary + num.imaginary;
    }
    
}

let obj1 = new ComplexNumber(2,3);
let obj2 = new ComplexNumber(5,6);
obj1.add(obj2);
console.log("Two Complex Number Add:",obj1.real,"+",obj1.imaginary,"i");
*/