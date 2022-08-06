import { Hero, Villain } from './character.js';
import {TEAM_A, TEAM_B} from "./main.js";

export class BoardController {
    constructor(gameContainer, gameController, gameConfig) {
        this.gameContainer = gameContainer;
        this.gameController = gameController;
        this.gameConfig = gameConfig;
        this.startButton = this.gameContainer.querySelector('#button-start-game');
        this.createTeamsButton = this.gameContainer.querySelector('#button-generate-teams');
        this.teamHeroCountInput = this.gameContainer.querySelector('#input-hero-count');
        this.teamVillainCountInput = this.gameContainer.querySelector('#input-villain-count');
        this.gameLevelInput = this.gameContainer.querySelector('#game-level-select');

        this.fillBoardFromConfig();
        this.addEventsListeners();
    }

    fillBoardFromConfig = () => {
        this.teamHeroCountInput.value = this.gameConfig.gameLevel.hero.teamMembersCount;
        this.teamVillainCountInput.value = this.gameConfig.gameLevel.villain.teamMembersCount;
    }

    addEventsListeners = () => {
        this.startButton.addEventListener('click', () => {
            this.gameController.battle(this.renderTeams);
        });

        this.createTeamsButton.addEventListener('click', async () => {
            const teamHeroCountInput = this.teamHeroCountInput.value > 20 ? this.gameConfig.gameLevel.hero.teamMembersCount : this.teamHeroCountInput.value;
            const teamVillainCountInput = this.teamVillainCountInput.value > 20 ? this.gameConfig.gameLevel.villain.teamMembersCount : this.teamVillainCountInput.value;

            this.teamHeroCountInput.value = teamHeroCountInput;
            this.teamVillainCountInput.value = teamVillainCountInput;

            this.gameController.heroesTeam = await this.gameController.createTeam(Hero, teamHeroCountInput);
            this.gameController.villainsTeam = await this.gameController.createTeam(Villain, teamVillainCountInput);

            this.renderTeams();

            localStorage.setItem(TEAM_A, JSON.stringify(this.gameController.heroesTeam));
            localStorage.setItem(TEAM_B, JSON.stringify(this.gameController.villainsTeam));


        });

        this.gameLevelInput.addEventListener('change', () => {
            this.gameConfig.setGameLevel(this.gameLevelInput.value);
            this.fillBoardFromConfig();
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

            characterCard.innerHTML = `
                <div class="character-card-details">    
                    <div>
                        <div class='character-detail name '>Name: ${character.name}</div>
                        <div class='character-detail hp'>HP: ${character.hitPoints}</div>
                        <div class='character-detail strength'>Power: ${character.strength}</div>
                        <div class='character-detail weapon-name'>Type: ${character.type}</div>
                    </div>
                    <div class='character-card-image'>
                        <img src="${character.imageUrl}" alt="character image">
                    </div>
                </div>    
                    
                `;

            const progressHp = generateProgressBar("HP", "red", character.getCurrentPercentHitPoints());
            // const progressStrength = generateProgressBar("Strength", "green", 1);

            characterCard.appendChild(progressHp);
            // characterCard.appendChild(progressStrength);

            wrapper.appendChild(characterCard);
        }
    }
}



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
