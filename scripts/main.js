import { Hero, characterTypes, Villain } from './character.js';
import { between } from './utilis.js';
import { GameBoard } from './gameBoard.js';


function duel(character1, character2) {
    character1.attack(between(1, 15), character2);
    if (character2.isAlive()) {
        character2.attack(between(1, 15), character1);
    }
}

function isTeamAlive(team) {
    return team.length > 0;
}

function randomCharacter(team) {
    const currentCharacterIndex = between(0, team.length - 1);
    return team[currentCharacterIndex];
}

function mainGame() {
    const game = new GameBoard();



    while (isTeamAlive(game.heroesTeam) && isTeamAlive(game.villainsTeam)) {
        const currentHero = randomCharacter(game.heroesTeam);
        const currentVillain = randomCharacter(game.villainsTeam);

        between(0, 1) === 1 ? duel(currentHero, currentVillain) : duel(currentVillain, currentHero);

        if (currentHero.isAlive() === false) {
            game.heroesTeam = game.heroesTeam.filter(hero => hero.id !== currentHero.id);
        }
        if (currentVillain.isAlive() === false) {
            game.villainsTeam = game.villainsTeam.filter(villain => villain.id !== currentVillain.id);
        }
    }

    console.log(game.heroesTeam);
    console.log(game.villainsTeam);
}

mainGame();
