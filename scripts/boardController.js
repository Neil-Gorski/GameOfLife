import { Hero, Villain } from './character.js';

export class BoardController {
    constructor(gameContainer, gameController, gameConfig) {
        this.gameContainer = gameContainer;
        this.gameController = gameController;
        this.gameConfig = gameConfig;
        this.startButton = this.gameContainer.querySelector('#button-start-game');
        this.createTeamsButton = this.gameContainer.querySelector('#button-generate-teams');
        this.teamHeroCountInput = this.gameContainer.querySelector('#input-hero-count');
        this.teamVillainCountInput = this.gameContainer.querySelector('#input-villain-count');

        this.fillBoardFromConfig();
        this.addEventsListeners();
    }

    fillBoardFromConfig = () => {
        this.teamHeroCountInput.value = this.gameConfig.gameLevel.hero.teamMembersCount;
        this.teamVillainCountInput.value = this.gameConfig.gameLevel.villain.teamMembersCount;
    }

    addEventsListeners = () => {
        this.startButton.addEventListener('click', () => {
            this.gameController.battle();
        });

        this.createTeamsButton.addEventListener('click', () => {
            const teamHeroCountInput = this.teamHeroCountInput.value;
            const teamVillainCountInput = this.teamVillainCountInput.value;

            this.gameController.heroesTeam = this.gameController.createTeam(Hero, teamHeroCountInput);
            this.gameController.villainsTeam = this.gameController.createTeam(Villain, teamVillainCountInput);

            this.renderTeams();

            console.log(this.gameController.heroesTeam);
            console.log(this.gameController.villainsTeam);
        });
    };

    renderTeams = () => {

        // <div className='character-card rpgui-container framed-golden'>
        //     <div className='name'>Hero</div>
        //     <div className='hp'>100</div>
        //     <div className='strength'>50</div>
        //     <div className='weapon-name'>Axe</div>
        //     <div className='progress-wrapper'>
        //         <label>HP:</label>
        //         <div className='rpgui-progress red'></div>
        //     </div>
        //
        //     <div className='progress-wrapper'>
        //         <label>Strength:</label>
        //         <div className='rpgui-progress green'></div>
        //     </div>
        // </div>


    };
}
