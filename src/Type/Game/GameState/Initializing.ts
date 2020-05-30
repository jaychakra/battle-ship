import {Game} from "../Game";
import {Player} from "../../Player";
import {GameState} from "./GameState";
import {Running} from "./Running";
import {GameStateIdentifier, PlayerIdentifier} from "../../../Enum";
import {Board} from "../../Board/Board";
import {Configuration} from "../../../configuration";

class Initializing extends GameState {
  constructor(context: Game) {
    super();
    this.name = GameStateIdentifier.INITIALIZING;
    this.context = context;
  }

  public addPlayer(player: Player, board: Board): void {
    switch (this.context.players.size) {
      case 0:
        this.context.players.set(PlayerIdentifier.FIRST, player);
        this.context.boards.set(PlayerIdentifier.FIRST, board);
        break;
      case 1:
        this.context.players.set(PlayerIdentifier.SECOND, player);
        this.context.boards.set(PlayerIdentifier.SECOND, board);
        break
      default:
        throw new Error("No more players can be added");
    }

    if (this.context.players.size > 1) this.context.changeState(new Running(this.context))
  }
}

export {Initializing}
