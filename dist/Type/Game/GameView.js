"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameView = void 0;
const Game_1 = require("./Game");
const configuration_1 = require("../../configuration");
const chalk = require("chalk");
class GameView {
    constructor(game) {
        this.game = game;
        this.blockMap = [[]];
        this.generateBlockMap();
    }
    generateBlockMap() {
        const n = configuration_1.Configuration.boardSize;
        this.blockMap[0] = new Array(configuration_1.Configuration.boardSize + 1);
        for (let i = 1; i <= n; i++) {
            this.blockMap[i] = new Array(configuration_1.Configuration.boardSize + 1);
            let row = String.fromCharCode(64 + i);
            for (let j = 1; j <= n; j++) {
                this.blockMap[i][j] = `${row}${j}`;
            }
        }
    }
    static paint(fgColor, bgColor, text) {
        return chalk.hex(fgColor).bgHex(bgColor)(` ${text} `);
    }
    getColor(surface, isCurrentPlayer) {
        if (surface.getHealth() == 0)
            return surface.entity.getDestroyedColor();
        // @ts-ignore
        if (isCurrentPlayer)
            return surface.entity.getActiveColor();
        return configuration_1.Configuration.damageColors.CLEAN;
    }
    buildUI(board, playerIdentifier) {
        const n = configuration_1.Configuration.boardSize;
        const header = configuration_1.Configuration.boardHeader;
        const displayBoard = [[]];
        displayBoard[0] = Array(configuration_1.Configuration.boardSize + 1);
        displayBoard[0][0] = GameView.paint(header.fgColor, header.bgColor, " ");
        for (let i = 1; i <= configuration_1.Configuration.boardSize; i++)
            displayBoard[0][i] = GameView.paint(header.fgColor, header.bgColor, `${i}`);
        for (let i = 1; i <= n; i++) {
            displayBoard[i] = Array(configuration_1.Configuration.boardSize + 1);
            displayBoard[i][0] = GameView.paint(header.fgColor, header.bgColor, String.fromCharCode(64 + i));
            for (let j = 1; j <= n; j++) {
                const block = this.blockMap[i][j];
                const surface = board.getSurface(block);
                const bgColor = this.getColor(surface, playerIdentifier == this.game.currentPlayer);
                displayBoard[i][j] = GameView.paint('#dedede', bgColor, " ");
            }
        }
        return displayBoard;
    }
    render(s, o) {
        const n = configuration_1.Configuration.boardSize;
        console.log(`${this.game.getStriker().getName()}'s Board, ${this.game.getOpponent().getName()}'s Board`);
        for (let i = 0; i <= n; i++) {
            let line = "";
            for (let j = 0; j <= n; j++) {
                line += s[i][j];
            }
            for (let j = 0; j <= n; j++) {
                line += o[i][j];
            }
            console.log(line);
        }
    }
    drawBoard() {
        const striker = this.game.currentPlayer;
        const observer = Game_1.Game.getRivalIdentifier(this.game.currentPlayer);
        const s = this.game.boards.get(striker);
        const o = this.game.boards.get(observer);
        this.render(this.buildUI(s, striker), this.buildUI(o, observer));
    }
}
exports.GameView = GameView;
//# sourceMappingURL=GameView.js.map