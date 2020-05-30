import {Game} from '../Game';
import {Player} from '../../Player';
import {Strike} from '../../WarHead/Strike';
import {GameStateIdentifier} from "../../../Enum";
import {Board} from "../../Board/Board";

abstract class GameState {
  protected context: Game;
  protected name: GameStateIdentifier;

  public getName(): GameStateIdentifier {
    return this.name;
  }

  public addPlayer(player: Player, board: Board): void {
    throw new Error(`Player addition not allowed in state ${this.name}`);
  }

  public render(): void {
    throw new Error(`View can't be rendered in state ${this.name}`);
  }

  public attack(strike: Strike): void {
    throw new Error(`Striking enemy territory not allowed in state ${this.name}`);
  }

}

export {GameState}
