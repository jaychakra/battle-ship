import {prompt} from "inquirer";
import {Game} from "../Game/Game";
import {Player} from "../Player";
import {Strike} from "../WarHead/Strike";
import {PlayerDataStore} from "../../DataStore/PlayerDataStore";
import {Configuration} from "../../configuration";
import {Board} from "../Board/Board";

abstract class GameController {
  protected game: Game;
  protected playerDataStore: PlayerDataStore;

  protected constructor(game: Game) {
    this.game = game;
    this.playerDataStore = PlayerDataStore.getInstance();
  }

  protected addPlayer(username: String): void {
    if (!this.playerDataStore.has(username)) {
      this.playerDataStore.add(username, new Player(username));
    }
    const player: Player = this.playerDataStore.get(username);
    this.game.addPlayer(player, new Board(Configuration.fleetAssignmentStrategy));
  }


  protected async addPlayerInput(id: number): Promise<any> {
    console.log(`Adding Player ${id}`);
    const question = {
      name: "username",
      type: prompt,
      message: "Username? ",
      default: `Player ${id}`
    }

    const answer: any = await prompt([question]);
    this.addPlayer(answer.username);
  }

  protected strikeBoard(blockString: string) {
    const strike: Strike = new Strike(blockString.split(" "), Configuration.destructionStrategy);
    this.game.attack(strike);
  }

  protected async attackInput(): Promise<any> {
    const question = {
      name: "blocks",
      type: prompt,
      message: `${this.game.getStriker().getName()}: Attack?`
    }

    const answers = await prompt([question]);

    return answers.blocks;
  }

  public abstract async init(): Promise<any> ;

  public abstract async loop(): Promise<any>
}

export {GameController}
