import { between, getClassName } from './utilis.js';

export const characterTypes = ["vampire", "human"]

class Person {
    constructor(name = "", type) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
        this.name = name;
        this.strength = 0;
        this.type = type;
    }

    isAlive() {
        return this.hitPoints > 0;
    }

    setHitPoints(hp) {
        this.hitPoints = hp;
    }

    setPowerAttack(minPowerAttack, maxPowerAttack) {
        this.powerAttack = {
            min: minPowerAttack,
            max: maxPowerAttack
        }
    }

    attack(target) {
        const power = this.getPowerAttack();
        if (this.isAlive() === false) {
            throw Error('Character cannot attack if is dead!');
        }
        const realPower = power + this.specialAttack(power);
        target.hitPoints = target.hitPoints >= realPower ? target.hitPoints - realPower : 0;

    }

    specialAttack(power) {
        let result = 0;

        const value = between(0, 100);
        let specialAttackPoints = 0;

        if (this.type === "vampire" && value > 75) {
            specialAttackPoints = Math.ceil(power * 0.15);
            this.hitPoints += specialAttackPoints;
            console.log(`Vampire Attack done! (recovered: ${specialAttackPoints} hp).`);
        }

        if (this.type === "human" && value > 90) {
            result = Math.floor(power * 1.5);
            console.log(`Human attack done! (extra hit: ${result}) hp`);
        }

        return result;
    }

    getPowerAttack() {
        return between(this.powerAttack.min, this.powerAttack.max)
    }
}

export class Hero extends Person {
    constructor(type) {
        const characterName = "Hero";
        super(characterName, type);
    }
}

export class Villain extends Person {
    constructor(type) {
        const characterName = "Villain";
        super(characterName, type);
    }
}

export function createCharacter(characterClass, gameConfig) {
    const character = new characterClass(characterTypes[between(0, 1)]);
    const className = getClassName(character);

    const minHp = gameConfig[className].characterHitPoints.min;
    const maxHp = gameConfig[className].characterHitPoints.max;
    character.setHitPoints(between(minHp, maxHp));

    const characterMinPowerAttack = gameConfig[className].characterAttackPower.min;
    const characterMaxPowerAttack = gameConfig[className].characterAttackPower.max;

    character.setPowerAttack(characterMinPowerAttack, characterMaxPowerAttack);

    return character;
}

export function getRandomCharacter(team) {
    const currentCharacterIndex = between(0, team.length - 1);
    return team[currentCharacterIndex];
}
