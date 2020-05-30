import { Game } from '../Game';
import { Player } from '../../Player';
import { Strike } from '../../WarHead/Strike';
import { GameStateIdentifier } from "../../../Enum";
import { Board } from "../../Board/Board";
declare abstract class GameState {
    protected context: Game;
    protected name: GameStateIdentifier;
    getName(): GameStateIdentifier;
    addPlayer(player: Player, board: Board): void;
    render(): void;
    attack(strike: Strike): void;
}
export { GameState };
