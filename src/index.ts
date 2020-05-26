import {GameControllerFactory} from "./Type/GameControl/GameControllerFactory";

const controller = GameControllerFactory.getController();

const run = () => {
  controller.init().then(() => {
    controller.loop().then(() => {});
  })
}

run();
