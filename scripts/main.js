import { GameController } from './gameController.js';

function mainGame() {
    const game = new GameController();

    game.battle();

    console.log(game.heroesTeam);
    console.log(game.villainsTeam);
}

mainGame();
