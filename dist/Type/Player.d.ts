import { Game } from "./Game/Game";
declare class Player {
    readonly name: String;
    private gamesPlayed;
    constructor(name: String);
    getName(): String;
    addAPlayedGame(game: Game): void;
    getAllPlayedGame(game: Game): Game[];
}
export { Player };
