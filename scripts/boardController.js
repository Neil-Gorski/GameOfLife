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
        const teamAWrapper = this.gameContainer.querySelector("#teamA-wrapper");
        const teamBWrapper = this.gameContainer.querySelector("#teamB-wrapper");

        const characterCard = document.createElement("div");
        characterCard.classList.add('character-card', 'rpgui-container', 'framed-golden');
        // console.log(characterCard);
        
        characterCard.innerHTML = `
            <div class='name'>Hero</div>
            <div class='hp'>100</div>
            <div class='strength'>50</div>
            <div class='weapon-name'>Axe</div>
        `;

        const progressHp = generateProgressBar("HP", "red", 1);
        const progressStrength = generateProgressBar("Strength", "green", 1);

        characterCard.appendChild(progressHp);
        characterCard.appendChild(progressStrength);

        teamAWrapper.appendChild(characterCard);
        console.log(teamAWrapper);

        teamBWrapper.appendChild(characterCard);
    };
}

function generateProgressBar(labelName, color, value){
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-wrapper');
    const label = document.createElement('label');
    label.innerText = labelName;
    const progressInner = document.createElement('div');
    progressInner.classList.add('rpgui-progress', color );

    progressBar.appendChild(label);
    progressBar.appendChild(progressInner);

    RPGUI.create(progressInner, 'progress');
    RPGUI.set_value(progressInner, value);
    return progressBar;
}
