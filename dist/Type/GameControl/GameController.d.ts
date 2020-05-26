import { Game } from "../Game/Game";
import { PlayerDataStore } from "../../DataStore/PlayerDataStore";
declare abstract class GameController {
    protected game: Game;
    protected playerDataStore: PlayerDataStore;
    protected constructor(game: Game);
    private addPlayerInput;
    protected strikeBoard(blockString: string): void;
    protected attackInput(): Promise<any>;
    init(): Promise<any>;
    abstract loop(): Promise<any>;
}
export { GameController };
