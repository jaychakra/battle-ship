import {Game} from "../Game";
import {Strike} from "../../Strike";
import {GameState} from "./GameState";
import {Player} from "../../Player";
import {GameStateIdentifier, Impact} from "../../../Enum";
import {Completed} from "./Completed";

class Running extends GameState {
  constructor(context: Game) {
    super();
    this.name = GameStateIdentifier.RUNNING;
    this.context = context;
  }

  private assessImpact(strike: Strike):void {
    if (strike.hasImpact(Impact.OPPONENT_DESTROYED)) {
      this.context.winner = this.context.currentPlayer;
      console.log(`Congratulations ${this.context.getStriker().getName()} has won`);
      this.context.changeState(new Completed(this.context));
    } else {
      this.context.changePlayersTurn();
    }
  }

  public attack(strike: Strike): void {
    console.log(`Attacking on ${this.context.getOpponent().getName()}`);
    const rivalBoard = this.context.boards.get(Game.getRivalIdentifier(this.context.currentPlayer));
    // @ts-ignore
    rivalBoard.changeSurfaceState(strike);
    this.assessImpact(strike);

  }

  public render(player: Player): void {
    this.context.gameView.drawBoard();
  }
}

export {Running}
