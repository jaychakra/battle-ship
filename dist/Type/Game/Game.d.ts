import { GameMode, GameStateIdentifier, PlayerIdentifier } from "../../Enum";
import { GameState } from "./GameState/GameState";
import { Player } from "../Player";
import { Strike } from "../WarHead/Strike";
import { GameView } from "./GameView";
import { Board } from "../Board/Board";
declare class Game {
    private gameMode;
    private gameState;
    currentPlayer: PlayerIdentifier;
    gameView: GameView;
    private winner;
    readonly players: Map<PlayerIdentifier, Player>;
    readonly boards: Map<PlayerIdentifier, Board>;
    constructor(gameMode: GameMode);
    static getRivalIdentifier(id: PlayerIdentifier): PlayerIdentifier;
    changeState(state: GameState): void;
    changePlayersTurn(): void;
    addPlayer(player: Player): void;
    attack(strike: Strike): void;
    render(player: Player): void;
    getStriker(): any;
    getOpponent(): any;
    getGameState(): GameStateIdentifier;
    getWinner(): PlayerIdentifier;
    setWinner(winner: PlayerIdentifier): void;
    getPlayer(id: PlayerIdentifier): Player;
}
export { Game };