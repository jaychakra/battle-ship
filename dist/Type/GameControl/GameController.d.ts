import { Game } from "../Game/Game";
import { PlayerDataStore } from "../../DataStore/PlayerDataStore";
declare abstract class GameController {
    protected game: Game;
    protected playerDataStore: PlayerDataStore;
    protected constructor(game: Game);
    protected addPlayer(username: String): void;
    protected addPlayerInput(id: number): Promise<any>;
    protected strikeBoard(blockString: string): void;
    protected attackInput(): Promise<any>;
    abstract init(): Promise<any>;
    abstract loop(): Promise<any>;
}
export { GameController };
