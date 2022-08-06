
const gameLevelsValue = ['easy', 'medium', 'hard'];

export class GameConfig {
    constructor(gameLevel = 'medium') {
        this.setGameLevel(gameLevel);
    }

    setGameLevel(gameLevel) {
        let config = {
            // default
            heroStarts: false,
            hero: {
                teamMembersCount: 6,
                heroBegins: false, // if false random
                characterHitPoints: {
                    min: 80,
                    max: 150,
                },
                characterAttackPower: {
                    min: 1,
                    max: 15,
                }
            },

            villain: {
                teamMembersCount: 6,
                heroBegins: false,
                characterHitPoints: {
                    min: 80,
                    max: 150,
                },
                characterAttackPower: {
                    min: 1,
                    max: 15,
                }
            }
        }

        if (!gameLevelsValue.includes(gameLevel)) {
            this.gameLevel = config;
            console.error('Game level value is incorrect, please provide valid value!', gameLevel);
            return;
        }

        if (gameLevel === "easy") {
            config = {
                heroStarts: true, // if false random
                hero: {
                    teamMembersCount: 5,
                    characterHitPoints: {
                        min: 80,
                        max: 200
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 20,
                    }
                },
                villain: {
                    teamMembersCount: 4,
                    characterHitPoints: {
                        min: 50,
                        max: 100
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 10,
                    }
                }
            }
        }

        if (gameLevel === "hard") {
            config = {
                heroStarts: true, // if false random
                hero: {
                    teamMembersCount: 4,
                    characterHitPoints: {
                        min: 80,
                        max: 180
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 18,
                    }
                },
                villain: {
                    teamMembersCount: 5,
                    characterHitPoints: {
                        min: 50,
                        max: 100
                    },
                    characterAttackPower: {
                        min: 1,
                        max: 10,
                    }
                }
            }
        }

        this.gameLevel = config;
    }
}