import { Game } from "../Game";
import { Strike } from "../../WarHead/Strike";
import { GameState } from "./GameState";
declare class Running extends GameState {
    constructor(context: Game);
    private assessImpact;
    attack(strike: Strike): void;
    render(): void;
}
export { Running };
