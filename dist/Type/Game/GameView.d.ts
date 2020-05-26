import { Game } from "./Game";
declare class GameView {
    readonly game: Game;
    private readonly blockMap;
    constructor(game: Game);
    private generateBlockMap;
    private static paint;
    private buildUI;
    private render;
    drawBoard(): void;
}
export { GameView };
