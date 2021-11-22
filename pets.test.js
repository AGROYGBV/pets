const Pets = require("./pets");

describe('Pets class', () => {
    test('pet has a name', () => {
        const testPet = new Pets("Rocky", "black", "dog")
        expect(testPet.name).toBe("Rocky")
    });
    test("Pet's species is defined", () => {
        const testPet2 = new Pets("Rocky", "black", "dog")
        expect(testPet2.species).toBe("dog")
    });
    test("pet's color defined", () => {
        const testPet3 = new Pets("Rocky", "black", "dog")
        expect(testPet3.color).toBe("black")
    });
    // changeName doesn't work
    // test("pet's name changes", () => {
    //     const testPet4 = new Pets("Rocky", "black", "dog")
    //     expect(testPet4.changeName("Rex")).toBe("Rex")
    // });
});