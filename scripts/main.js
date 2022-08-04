import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';

function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);


}

mainGame();

const wrapper = document.querySelector(".game-wrapper");

const header = document.createElement("h1");

const headerText = "Header Teaxt 1";
const textExample = "Lorem ipsum";

header.innerHTML = `<div>
        <h1>${headerText}</h1>
        <p>${textExample}</p>
    </div>`;

wrapper.appendChild(header);
