"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const inquirer_1 = require("inquirer");
const Player_1 = require("../Player");
const Strike_1 = require("../WarHead/Strike");
const PlayerDataStore_1 = require("../../DataStore/PlayerDataStore");
const configuration_1 = require("../../configuration");
const Board_1 = require("../Board/Board");
class GameController {
    constructor(game) {
        this.game = game;
        this.playerDataStore = PlayerDataStore_1.PlayerDataStore.getInstance();
    }
    addPlayer(username) {
        if (!this.playerDataStore.has(username)) {
            this.playerDataStore.add(username, new Player_1.Player(username));
        }
        const player = this.playerDataStore.get(username);
        this.game.addPlayer(player, new Board_1.Board(configuration_1.Configuration.fleetAssignmentStrategy));
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
        this.addPlayer(answer.username);
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
}
exports.GameController = GameController;
//# sourceMappingURL=GameController.js.map