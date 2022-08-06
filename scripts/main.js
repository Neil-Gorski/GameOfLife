import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';

let characterTypes = [];

async function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);



    // await getCharacterTypes("https://rickandmortyapi.com/api/character");
    // characterTypes = [...new Set(characterTypes)];
    // console.log("characterTypes", characterTypes);
}

mainGame();




async function getCharacterTypes(url) {
    const response = await fetch(url);

    if (response.status === 200) {
        const body = await response.json();

        const results = body.results;

        for (let character of results) {
            characterTypes.push(character.species);
        }

        if (body.info.next !== null) {
            await getCharacterTypes(body.info.next);
        }
    }
}


