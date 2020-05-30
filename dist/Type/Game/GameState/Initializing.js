"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializing = void 0;
const GameState_1 = require("./GameState");
const Running_1 = require("./Running");
const Enum_1 = require("../../../Enum");
class Initializing extends GameState_1.GameState {
    constructor(context) {
        super();
        this.name = Enum_1.GameStateIdentifier.INITIALIZING;
        this.context = context;
    }
    addPlayer(player, board) {
        switch (this.context.players.size) {
            case 0:
                this.context.players.set(Enum_1.PlayerIdentifier.FIRST, player);
                this.context.boards.set(Enum_1.PlayerIdentifier.FIRST, board);
                break;
            case 1:
                this.context.players.set(Enum_1.PlayerIdentifier.SECOND, player);
                this.context.boards.set(Enum_1.PlayerIdentifier.SECOND, board);
                break;
            default:
                throw new Error("No more players can be added");
        }
        if (this.context.players.size > 1)
            this.context.changeState(new Running_1.Running(this.context));
    }
}
exports.Initializing = Initializing;
//# sourceMappingURL=Initializing.js.map