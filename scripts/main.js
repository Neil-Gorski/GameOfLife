class Person {
    constructor(name = "") {
        this.name = name;
        this.hitPoints = 0;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp) {
        this.hitPoints = hp;
    }

    attack() {

    }
}

class Hero extends Person {
    constructor(name) {
        super(name);
    }
}

class Villain extends Person {
    constructor(name) {
        super(name);
    }
}

const hero = new Hero("Hero");
const villain = new Villain("Villain");

hero.hitPoints(100);
villain.hitPoints(110);

console.log(hero);
console.log(villain);

hero.attack();
villain.attack();


console.log(hero);
console.log(villain);


// console.log("character instanceof Character:", character instanceof Character);
// console.log("hero instanceof Person:", hero instanceof Person);
// console.log("firstPerson instanceof Person:", firstPerson instanceof Person);
// console.log("firstPerson instanceof Character):", firstPerson instanceof Character);


