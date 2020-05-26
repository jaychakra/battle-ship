"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoPlayerController = void 0;
const GameController_1 = require("./GameController");
const Enum_1 = require("../../Enum");
class TwoPlayerController extends GameController_1.GameController {
    constructor(game) {
        super(game);
    }
    async loop() {
        while (this.game.getGameState() != Enum_1.GameStateIdentifier.COMPLETED) {
            this.game.render();
            this.strikeBoard(await this.attackInput());
        }
    }
}
exports.TwoPlayerController = TwoPlayerController;
//# sourceMappingURL=TwoPlayerController.js.map