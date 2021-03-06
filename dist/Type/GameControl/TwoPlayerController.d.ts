import { GameController } from "./GameController";
import { Game } from "../Game/Game";
declare class TwoPlayerController extends GameController {
    constructor(game: Game);
    loop(): Promise<any>;
    init(): Promise<any>;
}
export { TwoPlayerController };
