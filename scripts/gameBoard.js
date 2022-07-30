import { characterTypes, Hero, Villain } from './character.js';
import { between } from './utilis.js';

export class GameBoard {
    constructor() {
        this.heroesTeam = this.createTeam(Hero, 5, "Hero");
        this.villainsTeam = this.createTeam(Villain, 5, "Villain");
    }

    createTeam(characterClass,  membersCount, name) {
        const team = [];
        for (let i = 0; i < membersCount; i++) {
            team.push(new characterClass(name +" "+  (i + 1), between(80, 150), characterTypes[between(0,1)]));
        }
        return team;
    }
}
