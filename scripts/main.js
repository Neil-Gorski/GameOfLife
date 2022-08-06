import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';
import {createTeamFromLocalStorage} from "./character.js";

export const TEAM_A = "TeamA"
export const TEAM_B = "TeamB"


async function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);


    const teamHero = localStorage.getItem(TEAM_A);
    const teamVillain = localStorage.getItem(TEAM_B);
    if(teamHero !== null && teamVillain !== null) {
        const teamHeroParsed = JSON.parse(teamHero);
        const teamVillainParsed =JSON.parse(teamVillain);
        const teamA = createTeamFromLocalStorage(teamHeroParsed);
        const teamB = createTeamFromLocalStorage(teamVillainParsed);
        game.heroesTeam = teamA;
        game.villainsTeam = teamB;
        board.renderTeams()
    }

}

mainGame();

// let characterXyzTypes = [];
// await getCharacterXyzTypes("https://rickandmortyapi.com/api/character");
// characterXyzTypes = [...new Set(characterXyzTypes)];
// console.log("characterXyzTypes", characterTypes);

// async function getCharacterTypes(url) {
//     const response = await fetch(url);

//     if (response.status === 200) {
//         const body = await response.json();

//         const results = body.results;

//         for (let character of results) {
//             characterTypes.push(character.species);
//         }

//         if (body.info.next !== null) {
//             await getCharacterTypes(body.info.next);
//         }
//     }
// }


