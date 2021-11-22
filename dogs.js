const Pets = require("./pets");

class Dog extends Pets {
    constructor(name, color, breed) {
        super(name, color, "Dog");
        this.breed = breed;
    }
    bark(sound){
        return 'this dog goes ${sounds}';
    }
};

d1 = new Dog("Darla", "chocolate", "Labordor")
console.log(d1);
module.exports = Dog;