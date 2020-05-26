import { GameState } from "./GameState";
import { Game } from "../Game";
declare class Completed extends GameState {
    constructor(context: Game);
    private updatePlayerHistory;
}
export { Completed };
