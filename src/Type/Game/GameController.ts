import {Game} from "./Game";
import {prompt} from "inquirer";
import {Player} from "../Player";
import {Strike} from "../Strike";
import {PlayerDataStore} from "../../DataStore/PlayerDataStore";

class GameController {
  private game: Game;
  private isLooping: boolean;
  private playerDataStore: PlayerDataStore;

  constructor(game: Game) {
    this.game = game;
    this.playerDataStore = PlayerDataStore.getInstance();
  }

  private async addPlayerInput(id: number): Promise<any> {
    const question = {
      name: "username",
      type: prompt,
      message: `Player ${id} username: `,
      default: `Player ${id}`
    }

    const answer: any = await prompt([question]);

    if (!this.playerDataStore.has(answer.username)) {
      this.playerDataStore.add(answer.username, new Player(answer.username));
    }

    const player:Player = this.playerDataStore.get(answer.username);

    this.game.addPlayer(player);
    console.log(`Player ${answer.username} added successfully`);
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
    this.isLooping = true;
    while (this.isLooping) {
      this.game.render(this.game.getStriker());
      await this.attackInput();
    }
  }
}

export {GameController}
