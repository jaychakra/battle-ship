import {GameController} from "./GameController";
import {GameStateIdentifier} from "../../Enum";
import {Game} from "../Game/Game";
import {Board} from "../Board/Board";
import {Configuration} from "../../configuration";

class ComputerController extends GameController {
  blocks: string[];

  constructor(game: Game) {
    super(game);
    this.blocks = Board.generateCoordinate();
  }

  private generateRandomBlockString(): string {
    let response: string = "";
    for (let i = 0; i < Math.ceil(Math.random() * 3); i++) {
      let index = Math.floor(Math.random() * Configuration.boardSize * Configuration.boardSize);
      response += `${this.blocks[index]} `;
    }
    return response.trim();
  }

  private attackByComputer(): void {
    const blockString: string =   this.generateRandomBlockString();
    console.log("You have been attacked at ", blockString);
    this.strikeBoard(blockString);
  }

  public async loop(): Promise<any> {
    while (this.game.getGameState() != GameStateIdentifier.COMPLETED) {
      this.game.render();
      this.strikeBoard(await this.attackInput());
      this.attackByComputer();
    }
  }

  async init(): Promise<any> {
    await this.addPlayerInput(1);
    this.addPlayer("COMPUTER");
  }
}

export {ComputerController}
