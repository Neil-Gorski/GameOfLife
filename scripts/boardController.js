import { Hero, Villain } from "./character.js";

export class BoardController {
    constructor(gameContainer, gameController, gameConfig) {
        this.gameContainer = gameContainer;
        this.gameController = gameController;
        this.gameConfig = gameConfig;
        this.startButton = this.gameContainer.querySelector("#button-start-game");
        this.createTeamsButton = this.gameContainer.querySelector("#button-generate-teams");
        this.teamHeroCountInput = this.gameContainer.querySelector("#input-hero-count");
        this.teamVillainCountInput = this.gameContainer.querySelector("#input-villain-count");

        this.teamHeroCountInput.value = this.gameConfig.gameLevel.hero.teamMembersCount;
        this.teamVillainCountInput.value = this.gameConfig.gameLevel.villain.teamMembersCount;

        this.startButton.addEventListener("click", () => {
            this.gameController.battle();
            console.log(this.gameController.heroesTeam);
            console.log(this.gameController.villainsTeam);
        });

        this.createTeamsButton.addEventListener("click", () => {
            const teamHeroCountInput = this.teamHeroCountInput.value;
            const teamVillainCountInput = this.teamVillainCountInput.value;

            this.gameController.heroesTeam = this.gameController.createTeam(Hero, teamHeroCountInput);
            this.gameController.villainsTeam = this.gameController.createTeam(Villain, teamVillainCountInput);

            console.log(this.gameController.heroesTeam);
            console.log(this.gameController.villainsTeam);
        });
    }
}
