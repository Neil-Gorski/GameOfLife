import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';

function mainGame() {
    const board = new BoardController(document.querySelector(".game-wrapper"));
    const game = new GameController();

    game.battle();

    console.log(game.heroesTeam);
    console.log(game.villainsTeam);
}

mainGame();
