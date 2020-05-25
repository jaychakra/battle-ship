import { GameState } from "./GameState";
import { Game } from "../Game";
import {GameStateIdentifier} from "../../../Enum";

class Completed extends GameState {

  constructor(context: Game) {
    super();
    this.name = GameStateIdentifier.COMPLETED;
    this.context = context;
  }
}
export {Completed}
