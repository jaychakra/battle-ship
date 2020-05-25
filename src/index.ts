import {GameController} from "./Type/Game/GameController";
import {Game} from "./Type/Game/Game";
import {GameMode} from "./Enum";

const game = new Game(GameMode.COMPUTER);
const controller = new GameController(game);

const run = () => {
  controller.init().then(() => {
    controller.loop().then(() => {});
  })
}

run();
