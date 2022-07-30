function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
class Person {
    constructor(name = "", hitPoints = 0) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.strength = 0;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp) {
        this.hitPoints = hp;
    }

    attack(power, target) {
        if (this.isAlive() === false) {
            throw Error('Character cannot attact if is dead!');
        }
        target.hitPoints = target.hitPoints >= power ? target.hitPoints - power : 0;
    }
}

class Hero extends Person {
    constructor(name, hitPoints) {
        super(name, hitPoints);
    }
}

class Villain extends Person {
    constructor(name, hitPoints) {
        super(name, hitPoints);
    }
}

function duel(character1, character2) {
    character1.attack(between(1, 15), character2);
    if (character2.isAlive()) {
        character2.attack(between(1, 15), character1);
    }
    console.log(character1);
    console.log(character2);
}

function isTeamAlive(team) {
    return team.length > 0;
}

const heroesTeam = [];
const villainsTeam = [];
const teamMembersCount = 5;

for (let i = 0; i < teamMembersCount; i++) {
    heroesTeam.push(new Hero("Hero " + (i + 1), between(80, 150)));
    villainsTeam.push(new Villain("Villain " + (i + 1), between(80, 150)));
}

while (isTeamAlive(heroesTeam) && isTeamAlive(villainsTeam)) {
    const currentHeroIndex = between(0, heroesTeam.length - 1);
    const currentVillainIndex = between(0, villainsTeam.length - 1);
    const currentHero = heroesTeam[currentHeroIndex];
    const currentVillain = villainsTeam[currentVillainIndex];

    between(0, 1) === 1 ? duel(currentHero, currentVillain) : duel(currentVillain, currentHero);

    if (currentHero.isAlive() === false) {
        heroesTeam.splice(currentHeroIndex, 1);
    }
    if (currentVillain.isAlive() === false) {
        villainsTeam.splice(currentVillainIndex, 1);
    }
}

console.log(heroesTeam);
console.log(villainsTeam);

// console.log("character instanceof Character:", character instanceof Character);
// console.log("hero instanceof Person:", hero instanceof Person);
// console.log("firstPerson instanceof Person:", firstPerson instanceof Person);
// console.log("firstPerson instanceof Character):", firstPerson instanceof Character);


