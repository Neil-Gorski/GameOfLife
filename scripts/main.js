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

    attack(power, target) {
      target.hitPoints = target.hitPoints >= power ? target.hitPoints - power : 0;
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

hero.setHitPoints(100);
villain.setHitPoints(100);

console.log(hero);
console.log(villain);

hero.attack(80, villain);
villain.attack(50, hero);
hero.attack(40, villain);
villain.attack(20, hero);

console.log(hero);
console.log(villain);


// console.log("character instanceof Character:", character instanceof Character);
// console.log("hero instanceof Person:", hero instanceof Person);
// console.log("firstPerson instanceof Person:", firstPerson instanceof Person);
// console.log("firstPerson instanceof Character):", firstPerson instanceof Character);


