"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
class GameState {
    addPlayer(player) {
        throw new Error(`Player addition not allowed in state ${this.name}`);
    }
    render(player) {
        throw new Error(`View can't be rendered in state ${this.name}`);
    }
    attack(strike) {
        throw new Error(`Striking enemy territory not allowed in state ${this.name}`);
    }
    getName() {
        return this.name;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=GameState.js.map