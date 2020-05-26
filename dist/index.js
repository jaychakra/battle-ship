"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameControllerFactory_1 = require("./Type/GameControl/GameControllerFactory");
const controller = GameControllerFactory_1.GameControllerFactory.getController();
const run = () => {
    controller.init().then(() => {
        controller.loop().then(() => { });
    });
};
run();
//# sourceMappingURL=index.js.map