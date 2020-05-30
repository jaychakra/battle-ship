import { Game } from "../Game";
import { Player } from "../../Player";
import { GameState } from "./GameState";
import { Board } from "../../Board/Board";
declare class Initializing extends GameState {
    constructor(context: Game);
    addPlayer(player: Player, board: Board): void;
}
export { Initializing };
