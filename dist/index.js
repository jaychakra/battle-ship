"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameController_1 = require("./Type/GameController");
const Game_1 = require("./Type/Game/Game");
const Enum_1 = require("./Enum");
const game = new Game_1.Game(Enum_1.GameMode.TWO_PLAYER);
const controller = new GameController_1.GameController(game);
const run = () => {
    controller.init().then(() => {
        controller.loop().then(() => { });
    });
};
run();
//# sourceMappingURL=index.js.map