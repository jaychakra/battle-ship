import {Game} from '../Game';
import {Player} from '../../Player';
import {Strike} from '../../Strike';

abstract class GameState {
  protected context: Game;
  protected stateName: String;

  public addPlayer(player: Player): void {
    throw new Error(`Player addition not allowed in state ${this.stateName}`);
  }

  public render(player: Player): void {
    throw new Error(`View can't be rendered in state ${this.stateName}`);
  }

  public attack(strike: Strike): void {
    throw new Error(`Striking enemy territory not allowed in state ${this.stateName}`);
  }
}

export {GameState}
