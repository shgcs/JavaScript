class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run() {
        console.log(this.name + " is running!");
    }
    shout() {
        console.log(this.name + " is shouting!");
    }
}

class Monkey extends Animal {//extends used to access the previous class function and constructor variable
    //but need to put the new values in each classes for access the previous class constructor
    info() {
        console.log(`${this.name} is the Animal`);
    }
}

let ani = new Animal("Monkey", "color");
let m = new Monkey("Horse");

ani.run();
ani.shout();
m.info();
m.run();