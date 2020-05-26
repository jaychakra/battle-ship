import { Game } from "./Game/Game";
declare class GameController {
    private game;
    private playerDataStore;
    constructor(game: Game);
    private addPlayerInput;
    private attackInput;
    init(): Promise<any>;
    loop(): Promise<any>;
}
export { GameController };
