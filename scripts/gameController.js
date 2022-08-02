import { Hero, Villain, createCharacter, getRandomCharacter } from './character.js';
import { between, getClassName } from './utilis.js';

export class GameController {
    constructor(gameLevel) {
        this.gameConfig = this.setGameLevel(gameLevel);
        this.heroesTeam = this.createTeam(Hero);
        this.villainsTeam = this.createTeam(Villain);
    }

    createTeam(characterClass) {
        const team = [];
        const membersCount = eval(`this.gameConfig.${characterClass.name.toLowerCase()}.teamMembersCount`)
        for (let i = 0; i < membersCount; i++) {
            team.push(createCharacter(characterClass, this.gameConfig));
        }
        return team;
    }

    battle() {
        while (this.isTeamAlive(this.heroesTeam) && this.isTeamAlive(this.villainsTeam)) {
            const currentHero = getRandomCharacter(this.heroesTeam);
            const currentVillain = getRandomCharacter(this.villainsTeam);

            // who goes first logic
            if (between(0, 1) === 1 || this.gameConfig.heroStarts === true) {
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
        }
    }

    duel(character1, character2) {

        character1.attack(this.getPowerAttack(character1), character2);

        if (character2.isAlive()) character2.attack(this.getPowerAttack(character2), character1);

    }

    getPowerAttack(character) {
        const className = getClassName(character);
        const characterMinPowerAttack = eval(`this.gameConfig.${className}.characterAttackPower.min`);
        const characterMaxPowerAttack = eval(`this.gameConfig.${className}.characterAttackPower.max`);
        return between(characterMinPowerAttack, characterMaxPowerAttack)
    }

    isTeamAlive(team) {
        return team.length > 0;
    }

    setGameLevel(gameLevel) {
        if (gameLevel === "easy") {
            return {
                heroStarts: true, // if false random
                hero: {
                    teamMembersCount: 5,
                    characterHitPoints: {
                        min: 80,
                        max: 200
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 20,
                    }
                },

                // default
                heroStarts: false,
                villain: {
                    teamMembersCount: 4,
                    characterHitPoints: {
                        min: 50,
                        max: 100
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 10,
                    }
                }
            }
        }

        return {
            hero: {
                teamMembersCount: 5,
                heroBegins: false, // if false random who starts a battle
                characterHitPoints: {
                    min: 80,
                    max: 150,
                },
                characterAttackPower: {
                    min: 1,
                    max: 15,
                }
            },

            villain: {
                teamMembersCount: 5,
                heroBegins: false, // if false random who starts a battle
                characterHitPoints: {
                    min: 80,
                    max: 150,
                },
                characterAttackPower: {
                    min: 1,
                    max: 15,
                }
            }
        }
    }
}

