"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
class GameState {
    getName() {
        return this.name;
    }
    addPlayer(player, board) {
        throw new Error(`Player addition not allowed in state ${this.name}`);
    }
    render() {
        throw new Error(`View can't be rendered in state ${this.name}`);
    }
    attack(strike) {
        throw new Error(`Striking enemy territory not allowed in state ${this.name}`);
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map