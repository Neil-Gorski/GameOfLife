function between (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
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

function duel(character1, character2){
    character1.attack(between(1,15), character2);
    character2.attack(between(1,15), character1);
    console.log(character1);
    console.log(character2);

}

while(villain.isAlive() && hero.isAlive()){
    duel(hero, villain)
}
// console.log("character instanceof Character:", character instanceof Character);
// console.log("hero instanceof Person:", hero instanceof Person);
// console.log("firstPerson instanceof Person:", firstPerson instanceof Person);
// console.log("firstPerson instanceof Character):", firstPerson instanceof Character);


