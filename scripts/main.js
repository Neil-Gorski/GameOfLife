function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const characterTypes=["vampir", "human"]

class Person {
    constructor(name = "", hitPoints = 0, type) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.strength = 0;
        this.type = type;
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
        if (between(1,100) > 75) {
            this.specialAttack(power);
        } 
    }

    specialAttack(power){
        if (this.type === "vampir"){
            this.hitPoints += Math.floor(power * 0.1);
            console.log("Special Attack done.")
        }
    }
}

class Hero extends Person {
    constructor(name, hitPoints, type) {
        super(name, hitPoints, type);
        
    }
}

class Villain extends Person {
    constructor(name, hitPoints, type) {
        super(name, hitPoints, type);
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

function createTeam(characterClass,  membersCount, name) {
    const team = [];
    for (let i = 0; i < membersCount; i++) {
        team.push(new characterClass(name +" "+  (i + 1), between(80, 150), characterTypes[between(0,1)]));
    }
    return team;
}


const heroesTeam = createTeam(Hero, 5, "Hero");
const villainsTeam = createTeam(Villain, 5, "Villian");
    

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


