import {Game} from "./Game/Game";

class Player {
  readonly name: String;
  private gamesPlayed: Game[];

  constructor(name: String) {
    this.name = name;
  }

  public getName():String {
    return this.name;
  }

  public addAPlayedGame(game: Game):void {
    this.gamesPlayed.push(game);
  }

  public getAllPlayedGame(game: Game):Game[] {
    return this.gamesPlayed;
  }
}

export {Player}
