import {Game} from "./Game";
import {Board} from "../Board/Board";

class GameView {
  readonly game:Game;
  constructor(game: Game) {
    this.game = game;
  }
  public drawBoard(): void {
    const s = this.game.boards.get(this.game.currentPlayer);
    console.log("My Board", s);
    const o = this.game.boards.get(Game.getRivalIdentifier(this.game.currentPlayer));
    console.log("Opponent Board", o);
  }
}

export {GameView}
