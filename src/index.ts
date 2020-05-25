import {GameController} from "./Type/GameController";
import {Game} from "./Type/Game/Game";
import {GameMode} from "./Enum";

const game = new Game(GameMode.TWO_PLAYER);
const controller = new GameController(game);

const run = () => {
  controller.init().then(() => {
    controller.loop().then(() => {});
  })
}

run();
