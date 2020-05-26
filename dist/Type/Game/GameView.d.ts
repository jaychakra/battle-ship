import { Game } from "./Game";
import { Surface } from "../Board/Surface";
declare class GameView {
    readonly game: Game;
    private readonly blockMap;
    constructor(game: Game);
    private generateBlockMap;
    private static paint;
    getColor(surface: Surface, isCurrentPlayer: boolean): any;
    private buildUI;
    private render;
    drawBoard(): void;
}
export { GameView };
