import {GameController} from "./Type/GameControl/GameController";
import {Game} from "./Type/Game/Game";
import {GameMode} from "./Enum";
import {GameControllerFactory} from "./Type/GameControl/GameControllerFactory";

const controller = GameControllerFactory.getController();

const run = () => {
  controller.init().then(() => {
    controller.loop().then(() => {});
  })
}

run();
