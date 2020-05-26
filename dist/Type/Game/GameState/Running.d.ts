import { Game } from "../Game";
import { Strike } from "../../WarHead/Strike";
import { GameState } from "./GameState";
import { Player } from "../../Player";
declare class Running extends GameState {
    constructor(context: Game);
    private assessImpact;
    attack(strike: Strike): void;
    render(player: Player): void;
}
export { Running };
