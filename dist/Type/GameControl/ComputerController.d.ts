import { GameController } from "./GameController";
import { Game } from "../Game/Game";
declare class ComputerController extends GameController {
    blocks: string[];
    constructor(game: Game);
    private generateRandomBlockString;
    private attackByComputer;
    loop(): Promise<any>;
    init(): Promise<any>;
}
export { ComputerController };
