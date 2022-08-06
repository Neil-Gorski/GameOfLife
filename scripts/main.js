import { GameController } from './gameController.js';
import { BoardController } from './boardController.js';
import { GameConfig } from './gameConfig.js';

function mainGame() {
    const config = new GameConfig();
    const game = new GameController(config);
    const board = new BoardController(document.querySelector(".game-wrapper"), game, config);


}

mainGame();




//
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise rozwiązany!!!");
//     }, 2000)
// });
//
// firstPromise.then((obrazek) => {
//         console.log(obrazek);
//         //<img> src = obrazek;
//
// }).catch().finally();
//
//
//
// await fetch("www.onet.pl");
