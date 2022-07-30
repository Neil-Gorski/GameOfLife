import { characterTypes, Hero, Villain } from './character.js';
import { between } from './utilis.js';

export class GameController {
    constructor(gameLevel) {
        this.gameDetails = this.setGameLevel(gameLevel);
        this.heroesTeam = this.createTeam(Hero, this.gameDetails.hero.teamMembersCount, "Hero");
        this.villainsTeam = this.createTeam(Villain, this.gameDetails.villain.teamMembersCount, "Villain");
    }

    createTeam(characterClass, membersCount, name) {
        const team = [];
        for (let i = 0; i < membersCount; i++) {
            const minHp = name === "Hero" ? this.gameDetails.hero.characterHitPoints.min : this.gameDetails.villain.characterHitPoints.min;
            const maxHp = name === "Hero" ? this.gameDetails.hero.characterHitPoints.max : this.gameDetails.villain.characterHitPoints.max;
            team.push(new characterClass(name + " " + (i + 1), between(minHp, maxHp), characterTypes[between(0, 1)]));
        }
        return team;
    }

    battle() {
        while (isTeamAlive(this.heroesTeam) && isTeamAlive(this.villainsTeam)) {
            const currentHero = randomCharacter(this.heroesTeam);
            const currentVillain = randomCharacter(this.villainsTeam);

            between(0, 1) === 1 ? this.duel(currentHero, currentVillain) : this.duel(currentVillain, currentHero);

            if (currentHero.isAlive() === false) {
                this.heroesTeam = this.heroesTeam.filter(hero => hero.id !== currentHero.id);
            }
            if (currentVillain.isAlive() === false) {
                this.villainsTeam = this.villainsTeam.filter(villain => villain.id !== currentVillain.id);
            }
        }
    }

    duel(character1, character2) {
        const character1minPowerAttack = character1 instanceof Hero ? this.gameDetails.hero.characterAttackPower.min : this.gameDetails.villain.characterAttackPower.min;
        const character1maxPowerAttack = character1 instanceof Hero ? this.gameDetails.hero.characterAttackPower.max : this.gameDetails.villain.characterAttackPower.max;
        character1.attack(between(character1minPowerAttack, character1maxPowerAttack), character2);
        if (character2.isAlive()) {
            const character2minPowerAttack = character2 instanceof Hero ? this.gameDetails.hero.characterAttackPower.min : this.gameDetails.villain.characterAttackPower.min;
            const character2maxPowerAttack = character2 instanceof Hero ? this.gameDetails.hero.characterAttackPower.max : this.gameDetails.villain.characterAttackPower.max;
            character2.attack(between(character2minPowerAttack, character2maxPowerAttack), character1);
        }
    }

    setGameLevel(gameLevel) {

        if (gameLevel === "easy") {
            return {
                hero: {
                    teamMembersCount: 5,
                    heroBegins: false, // if false random who starts a battle
                    characterHitPoints: {
                        min: 80,
                        max: 200
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 20,
                    }
                },

                villain: {
                    teamMembersCount: 4,
                    heroBegins: false, // if false random who starts a battle
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



function isTeamAlive(team) {
    return team.length > 0;
}

function randomCharacter(team) {
    const currentCharacterIndex = between(0, team.length - 1);
    return team[currentCharacterIndex];
}
