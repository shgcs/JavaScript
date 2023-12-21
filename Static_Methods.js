class Animal {
    constructor(name) {
        this.name = name;
       // this.name =Animal.capitalized(name);
    }

    walk() {
        console.log("Animal " + /*Animal.capitalized(this.name)*/ this.name + " is walking");
    }
//static method used to call to the actual method before the actual method
    static capitalized(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

//j = new Animal("jack");
j = new Animal(Animal.capitalized("jack"));

j.walk();