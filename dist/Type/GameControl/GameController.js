"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const inquirer_1 = require("inquirer");
const Player_1 = require("../Player");
const Strike_1 = require("../WarHead/Strike");
const PlayerDataStore_1 = require("../../DataStore/PlayerDataStore");
const configuration_1 = require("../../configuration");
class GameController {
    constructor(game) {
        this.game = game;
        this.playerDataStore = PlayerDataStore_1.PlayerDataStore.getInstance();
    }
    async addPlayerInput(id) {
        console.log(`Adding Player ${id}`);
        const question = {
            name: "username",
            type: inquirer_1.prompt,
            message: "Username? ",
            default: `Player ${id}`
        };
        const answer = await inquirer_1.prompt([question]);
        if (!this.playerDataStore.has(answer.username)) {
            this.playerDataStore.add(answer.username, new Player_1.Player(answer.username));
        }
        const player = this.playerDataStore.get(answer.username);
        this.game.addPlayer(player);
    }
    strikeBoard(blockString) {
        const strike = new Strike_1.Strike(blockString.split(" "), configuration_1.Configuration.destructionStrategy);
        this.game.attack(strike);
    }
    async attackInput() {
        const question = {
            name: "blocks",
            type: inquirer_1.prompt,
            message: `${this.game.getStriker().getName()}: Attack?`
        };
        const answers = await inquirer_1.prompt([question]);
        return answers.blocks;
    }
    async init() {
        await this.addPlayerInput(1);
        await this.addPlayerInput(2);
    }
}
exports.GameController = GameController;
//# sourceMappingURL=GameController.js.map