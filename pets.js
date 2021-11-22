class Pets {
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    }
    changeName(name) {
        this.name = name;
    }
}

module.exports = Pets