import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';

function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);
}

mainGame();
