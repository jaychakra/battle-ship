import { GameState } from "./GameState";
import { Game } from "../Game";
import {GameStateIdentifier} from "../../../Enum";

class Completed extends GameState {

  constructor(context: Game) {
    super();
    this.name = GameStateIdentifier.COMPLETED;
    this.context = context;


  }
  private updatePlayerHistory(): void {
    const winner = this.context.getWinner();
    const runner = Game.getRivalIdentifier(winner);

    this.context.getPlayer(winner).addAPlayedGame(this.context);
    this.context.getPlayer(runner).addAPlayedGame(this.context);
  }
}
export {Completed}
