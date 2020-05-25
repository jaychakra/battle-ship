import { GameState } from "./GameState";
import { Game } from "../Game";

class Completed extends GameState {
  constructor(context: Game) {
    super();
    this.stateName = "Player1Wins";
    this.context = context;
  }
}
export {Completed}
