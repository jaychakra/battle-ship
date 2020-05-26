"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addAPlayedGame(game) {
        this.gamesPlayed.push(game);
    }
    getAllPlayedGame(game) {
        return this.gamesPlayed;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map