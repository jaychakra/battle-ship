import {GameController} from "./GameController";
import {GameStateIdentifier} from "../../Enum";
import {Game} from "../Game/Game";

class TwoPlayerController extends GameController {
  constructor(game: Game) {
    super(game)
  }

  public async loop(): Promise<any> {
    while (this.game.getGameState() != GameStateIdentifier.COMPLETED) {
      this.game.render();
      this.strikeBoard(await this.attackInput());
    }
  }

  async init(): Promise<any> {
    await this.addPlayerInput(1);
    await this.addPlayerInput(2);
  }
}

export {TwoPlayerController}
