"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerController = void 0;
const GameController_1 = require("./GameController");
const Enum_1 = require("../../Enum");
const Board_1 = require("../Board/Board");
const configuration_1 = require("../../configuration");
class ComputerController extends GameController_1.GameController {
    constructor(game) {
        super(game);
        this.blocks = Board_1.Board.generateCoordinate();
    }
    generateRandomBlockString() {
        let response = "";
        for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
            let index = Math.floor(Math.random() * configuration_1.Configuration.boardSize * configuration_1.Configuration.boardSize);
            response += `${this.blocks[index]} `;
        }
        return response.trim();
    }
    attackByComputer() {
        const blockString = this.generateRandomBlockString();
        console.log("You have been attacked at ", blockString);
        this.strikeBoard(blockString);
    }
    async loop() {
        while (this.game.getGameState() != Enum_1.GameStateIdentifier.COMPLETED) {
            this.game.render();
            this.strikeBoard(await this.attackInput());
            this.attackByComputer();
        }
    }
}
exports.ComputerController = ComputerController;
//# sourceMappingURL=ComputerController.js.map