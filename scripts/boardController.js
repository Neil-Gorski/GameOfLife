export class BoardController {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.startButton = this.gameContainer.querySelector("#button-start-game");


        this.startButton.addEventListener("click",  function (){
            console.log("Click button");
        })
        console.log(this.startButton);
    }
}
