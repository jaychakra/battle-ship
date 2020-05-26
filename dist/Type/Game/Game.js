"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Enum_1 = require("../../Enum");
const Initializing_1 = require("./GameState/Initializing");
const GameView_1 = require("./GameView");
class Game {
    constructor(gameMode) {
        this.gameMode = gameMode;
        this.gameState = new Initializing_1.Initializing(this);
        this.gameView = new GameView_1.GameView(this);
        this.players = new Map();
        this.boards = new Map();
        this.currentPlayer = Enum_1.PlayerIdentifier.FIRST;
    }
    static getRivalIdentifier(id) {
        return id == Enum_1.PlayerIdentifier.FIRST ? Enum_1.PlayerIdentifier.SECOND : Enum_1.PlayerIdentifier.FIRST;
    }
    changeState(state) {
        this.gameState = state;
    }
    changePlayersTurn() {
        this.currentPlayer = Game.getRivalIdentifier(this.currentPlayer);
    }
    addPlayer(player) {
        this.gameState.addPlayer(player);
    }
    attack(strike) {
        this.gameState.attack(strike);
    }
    render(player) {
        this.gameState.render(player);
    }
    getStriker() {
        return this.players.get(this.currentPlayer);
    }
    getOpponent() {
        const opponent = Game.getRivalIdentifier(this.currentPlayer);
        return this.players.get(opponent);
    }
    getGameState() {
        return this.gameState.getName();
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        if (!!this.winner)
            throw new Error("Game already has a winner");
        this.winner = winner;
    }
    getPlayer(id) {
        // @ts-ignore
        return this.players.get(id);
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map