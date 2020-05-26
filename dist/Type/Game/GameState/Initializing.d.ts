import { Game } from "../Game";
import { Player } from "../../Player";
import { GameState } from "./GameState";
declare class Initializing extends GameState {
    constructor(context: Game);
    addPlayer(player: Player): void;
}
export { Initializing };
