import {Game} from '../Game';
import {Player} from '../../Player';
import {Strike} from '../../Strike';
import {GameStateIdentifier} from "../../../Enum";

abstract class GameState {
  protected context: Game;
  protected name: GameStateIdentifier;

  public addPlayer(player: Player): void {
    throw new Error(`Player addition not allowed in state ${this.name}`);
  }

  public render(player: Player): void {
    throw new Error(`View can't be rendered in state ${this.name}`);
  }

  public attack(strike: Strike): void {
    throw new Error(`Striking enemy territory not allowed in state ${this.name}`);
  }

  public getName(): GameStateIdentifier {
    return this.name;
  }

}

export {GameState}
