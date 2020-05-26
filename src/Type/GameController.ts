import {prompt} from "inquirer";
import {Game} from "./Game/Game";
import {Player} from "./Player";
import {Strike} from "./WarHead/Strike";
import {PlayerDataStore} from "../DataStore/PlayerDataStore";
import {GameStateIdentifier} from "../Enum";

class GameController {
  private game: Game;
  private playerDataStore: PlayerDataStore;

  constructor(game: Game) {
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

  private async attackInput(): Promise<any> {
    const question = {
      name: "blocks",
      type: prompt,
      message: `${this.game.getStriker().getName()}: Attack?`
    }
    const answer: any = await prompt([question]);

    const strike: Strike = new Strike(answer.blocks.split(" "));
    this.game.attack(strike);
  }

  public async init(): Promise<any> {
    await this.addPlayerInput(1);
    await this.addPlayerInput(2);
  }

  public async loop(): Promise<any> {
    while (this.game.getGameState() != GameStateIdentifier.COMPLETED) {
      this.game.render();
      await this.attackInput();
    }
  }
}

export {GameController}
