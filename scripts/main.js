import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';

async function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);
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


