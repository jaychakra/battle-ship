import {GameController} from "./GameController";
import {GameMode} from "../../Enum";
import {ComputerController} from "./ComputerController";
import {Configuration} from "../../configuration";
import {Game} from "../Game/Game";
import {TwoPlayerController} from "./TwoPlayerController";

class GameControllerFactory {

  static getController(): GameController {
    const game = new Game(GameMode.COMPUTER);
    return Configuration.gameController == GameMode.TWO_PLAYER ? new TwoPlayerController(game) : new ComputerController(game);
  }
}

export {GameControllerFactory}
