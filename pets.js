class Pets {
    constructor(name, color, species) {
        this.name = name;
        this.color = color;
        this.species = species;
    }

    changeName(name) {
        this.name = name;
    }
}

p1 = new Pets("Celine", "black", "cat");
p2 = new Pets("Olivia", "white with some spots", "cat");
console.log(p1);
console.log(p2);

module.exports = Pets;