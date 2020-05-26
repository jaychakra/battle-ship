"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameControllerFactory = void 0;
const Enum_1 = require("../../Enum");
const ComputerController_1 = require("./ComputerController");
const configuration_1 = require("../../configuration");
const Game_1 = require("../Game/Game");
const TwoPlayerController_1 = require("./TwoPlayerController");
class GameControllerFactory {
    static getController() {
        const game = new Game_1.Game();
        return configuration_1.Configuration.gameController == Enum_1.GameMode.TWO_PLAYER ? new TwoPlayerController_1.TwoPlayerController(game) : new ComputerController_1.ComputerController(game);
    }
}
exports.GameControllerFactory = GameControllerFactory;
//# sourceMappingURL=GameControllerFactory.js.map