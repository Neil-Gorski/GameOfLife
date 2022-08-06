import { Hero, Villain, createCharacter, getRandomCharacter } from './character.js';
import { between, getClassName } from './utilis.js';

export class GameController {
    constructor(gameConfig) {
        this.heroesTeam = [];
        this.villainsTeam = [];
        this.gameConfig = gameConfig;
    }

    createTeam(characterClass, membersCount) {
        const team = [];

        for (let i = 0; i < membersCount; i++) {
            team.push(createCharacter(characterClass, this.gameConfig.gameLevel));
        }
        return team;
    }

    battle(rerenderTeamsCallback) {
        while (this.isTeamAlive(this.heroesTeam) && this.isTeamAlive(this.villainsTeam)) {
            const currentHero = getRandomCharacter(this.heroesTeam);
            const currentVillain = getRandomCharacter(this.villainsTeam);

            // who goes first logic
            if (between(0, 1) === 1 || this.gameConfig.gameLevel.heroStarts === true) {
                this.duel(currentHero, currentVillain);
            } else {
                this.duel(currentVillain, currentHero);
            }

            if (currentHero.isAlive() === false) {
                this.heroesTeam = this.heroesTeam.filter(hero => hero.id !== currentHero.id);
            }
            if (currentVillain.isAlive() === false) {
                this.villainsTeam = this.villainsTeam.filter(villain => villain.id !== currentVillain.id);
            }

            if (rerenderTeamsCallback !== undefined) {
                rerenderTeamsCallback();
            }
        }
    }

    duel(character1, character2) {

        character1.attack(character2);

        if (character2.isAlive()) {
            character2.attack(character1);
        }

    }

    isTeamAlive(team) {
        return team.length > 0;
    }
}
