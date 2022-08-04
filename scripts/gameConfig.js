export class GameConfig {
    constructor(gameLevel) {
        this.gameLevel = this.setGameLevel(gameLevel);
    }

    setGameLevel(gameLevel) {
        if (gameLevel === "easy") {
            return {
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

        return {
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
    }
}