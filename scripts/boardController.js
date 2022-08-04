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
            const teamHeroCountInput = this.teamHeroCountInput.value > 20 ? this.gameConfig.gameLevel.hero.teamMembersCount : this.teamHeroCountInput.value;
            const teamVillainCountInput = this.teamVillainCountInput.value > 20 ? this.gameConfig.gameLevel.villain.teamMembersCount : this.teamVillainCountInput.value;

            this.teamHeroCountInput.value = teamHeroCountInput;
            this.teamVillainCountInput.value = teamVillainCountInput;

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

        this.renderTeam(this.gameController.heroesTeam, teamAWrapper);
        this.renderTeam(this.gameController.villainsTeam, teamBWrapper);
    }

    renderTeam = (team, wrapper) => {
        wrapper.innerHTML = '';
        for (const character of team) {
            const characterCard = document.createElement("div");
            characterCard.classList.add('character-card', 'rpgui-container', 'framed-golden');
            // console.log(characterCard);

            characterCard.innerHTML = `
                    <div class='name'>${character.name}</div>
                    <div class='hp'>${character.hitPoints}</div>
                    <div class='strength'>${character.strength}</div>
                    <div class='weapon-name'>${character.type}</div>
                `;

            const progressHp = generateProgressBar("HP", "red", character.getCurrentPercentHitPoints());
            const progressStrength = generateProgressBar("Strength", "green", 1);

            characterCard.appendChild(progressHp);
            characterCard.appendChild(progressStrength);

            wrapper.appendChild(characterCard);
        }
    }
};



function generateProgressBar(labelName, color, value) {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-wrapper');
    const label = document.createElement('label');
    label.innerText = labelName;
    const progressInner = document.createElement('div');
    progressInner.classList.add('rpgui-progress', color);

    progressBar.appendChild(label);
    progressBar.appendChild(progressInner);

    RPGUI.create(progressInner, 'progress');
    RPGUI.set_value(progressInner, value);
    return progressBar;
}
