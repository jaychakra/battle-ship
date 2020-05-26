"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Running = void 0;
const Game_1 = require("../Game");
const GameState_1 = require("./GameState");
const Enum_1 = require("../../../Enum");
const Completed_1 = require("./Completed");
class Running extends GameState_1.GameState {
    constructor(context) {
        super();
        this.name = Enum_1.GameStateIdentifier.RUNNING;
        this.context = context;
    }
    assessImpact(strike) {
        if (strike.hasImpact(Enum_1.Impact.OPPONENT_DESTROYED)) {
            this.context.setWinner(this.context.currentPlayer);
            console.log(`Congratulations ${this.context.getStriker().getName()} has won`);
            this.context.changeState(new Completed_1.Completed(this.context));
        }
        else {
            this.context.changePlayersTurn();
        }
    }
    attack(strike) {
        const rivalBoard = this.context.boards.get(Game_1.Game.getRivalIdentifier(this.context.currentPlayer));
        // @ts-ignore
        rivalBoard.changeSurfaceState(strike);
        this.assessImpact(strike);
    }
    render() {
        this.context.gameView.drawBoard();
    }
}
exports.Running = Running;
//# sourceMappingURL=Running.js.map