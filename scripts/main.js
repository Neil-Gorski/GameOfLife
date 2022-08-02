import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';

function mainGame() {
    const game = new GameController();
    const board = new BoardController(document.querySelector(".game-wrapper"), game);

    // game.battle();

    console.log(game.heroesTeam);
    console.log(game.villainsTeam);
}

mainGame();
