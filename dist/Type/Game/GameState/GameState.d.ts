import { Game } from '../Game';
import { Player } from '../../Player';
import { Strike } from '../../WarHead/Strike';
import { GameStateIdentifier } from "../../../Enum";
declare abstract class GameState {
    protected context: Game;
    protected name: GameStateIdentifier;
    addPlayer(player: Player): void;
    render(player: Player): void;
    attack(strike: Strike): void;
    getName(): GameStateIdentifier;
}
export { GameState };
