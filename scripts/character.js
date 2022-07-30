import { between } from './utilis.js';

export const characterTypes = ["vampire", "human"]

class Person {
    constructor(name = "", hitPoints = 0, type) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
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
            throw Error('Character cannot attack if is dead!');
        }
        target.hitPoints = target.hitPoints >= power ? target.hitPoints - power : 0;
        if (between(1,100) > 75) {
            this.specialAttack(power);
        }
    }

    specialAttack(power){
        if (this.type === "vampire"){
            this.hitPoints += Math.floor(power * 0.1);
            console.log("Special Attack done.")
        }
    }
}

export class Hero extends Person {
    constructor(name, hitPoints, type) {
        super(name, hitPoints, type);

    }
}

export class Villain extends Person {
    constructor(name, hitPoints, type) {
        super(name, hitPoints, type);
    }
}
