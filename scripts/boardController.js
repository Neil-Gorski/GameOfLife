import {Hero, Villain} from "./character.js";

export class BoardController {
    constructor(gameContainer, gameController) {
        this.gameContainer = gameContainer;
        this.gameController = gameController;
        this.startButton = this.gameContainer.querySelector("#button-start-game");
        this.createTeamsButton = this.gameContainer.querySelector("#button-generate-teams");
        this.teamCountInput = this.gameContainer.querySelector("#input-team-count");


        this.startButton.addEventListener("click",  function (){
            console.log("Click button");
        })
        console.log(this.startButton);
        this.createTeamsButton.addEventListener("click", () => {
            const teamCount = this.teamCountInput.value;
            console.log(teamCount);
            this.gameController.heroesTeam = this.gameController.createTeam(Hero, teamCount);
            this.gameController.villainsTeam = this.gameController.createTeam(Villain, teamCount);
            console.log(this.gameController.heroesTeam);
            console.log(this.gameController.villainsTeam);


        })
    }
}
