import {prompt} from "inquirer";
import {Game} from "../Game/Game";
import {Player} from "../Player";
import {Strike} from "../WarHead/Strike";
import {PlayerDataStore} from "../../DataStore/PlayerDataStore";
import {Configuration} from "../../configuration";

abstract class GameController {
  protected game: Game;
  protected playerDataStore: PlayerDataStore;

  protected constructor(game: Game) {
    this.game = game;
    this.playerDataStore = PlayerDataStore.getInstance();
  }

  private async addPlayerInput(id: number): Promise<any> {
    console.log(`Adding Player ${id}`);
    const question = {
      name: "username",
      type: prompt,
      message: "Username? ",
      default: `Player ${id}`
    }

    const answer: any = await prompt([question]);

    if (!this.playerDataStore.has(answer.username)) {
      this.playerDataStore.add(answer.username, new Player(answer.username));
    }

    const player: Player = this.playerDataStore.get(answer.username);

    this.game.addPlayer(player)
  }

  protected strikeBoard(blockString: string) {
    console.log(blockString);
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

  public async init(): Promise<any> {
    await this.addPlayerInput(1);
    await this.addPlayerInput(2);
  }

  public abstract async loop(): Promise<any>
}

export {GameController}
