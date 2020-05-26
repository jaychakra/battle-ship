"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Completed = void 0;
const GameState_1 = require("./GameState");
const Game_1 = require("../Game");
const Enum_1 = require("../../../Enum");
class Completed extends GameState_1.GameState {
    constructor(context) {
        super();
        this.name = Enum_1.GameStateIdentifier.COMPLETED;
        this.context = context;
    }
    updatePlayerHistory() {
        const winner = this.context.getWinner();
        const runner = Game_1.Game.getRivalIdentifier(winner);
        this.context.getPlayer(winner).addAPlayedGame(this.context);
        this.context.getPlayer(runner).addAPlayedGame(this.context);
    }
}
exports.Completed = Completed;
//# sourceMappingURL=Completed.js.map