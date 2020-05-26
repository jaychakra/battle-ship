import {Game} from "./Game";
import {Configuration} from "../../configuration";
import {Board} from "../Board/Board";
import {Surface} from "../Board/Surface";
import {PlayerIdentifier} from "../../Enum";
import * as chalk from "chalk";

class GameView {
  readonly game: Game;
  private readonly blockMap: String[][];

  constructor(game: Game) {
    this.game = game;
    this.blockMap = [[]];
    this.generateBlockMap();
  }

  private generateBlockMap(): void {
    const n: number = Configuration.boardSize;
    this.blockMap[0] = new Array(Configuration.boardSize + 1);
    for (let i = 1; i <= n; i++) {
      this.blockMap[i] = new Array(Configuration.boardSize + 1);
      let row = String.fromCharCode(64 + i);
      for (let j = 1; j <= n; j++) {
        this.blockMap[i][j] = `${row}${j}`;
      }
    }
  }

  private static paint(fgColor: string, bgColor: string, text: string): any {
    return chalk.hex(fgColor).bgHex(bgColor)(` ${text} `);
  }

  private buildUI(board: Board | any, playerIdentifier: PlayerIdentifier): String[][] {
    const n: number = Configuration.boardSize
    const header = Configuration.boardHeader;
    const displayBoard: String[][] = [[]];
    displayBoard[0] = Array(Configuration.boardSize + 1);
    displayBoard[0][0] = GameView.paint(header.fgColor, header.bgColor, " ");
    for (let i = 1; i <= Configuration.boardSize; i++) displayBoard[0][i] = GameView.paint(header.fgColor, header.bgColor, `${i}`);

    for (let i = 1; i <= n; i++) {
      displayBoard[i] = Array(Configuration.boardSize + 1);
      displayBoard[i][0] = GameView.paint(header.fgColor, header.bgColor, String.fromCharCode(64 + i));
      for (let j = 1; j <= n; j++) {
        const block: String = this.blockMap[i][j];
        const surface: Surface = board.getSurface(block);
        if (surface.getHealth() == 0) {
          displayBoard[i][j] = GameView.paint('#dedede', Configuration.damageColors.DESTROYED, " ");
        } else {
          if (playerIdentifier == this.game.currentPlayer) {
            // @ts-ignore
            const bgColor: string = Configuration.seaEntityColors[surface.entity.getSeaEntityIdentifier()];
            displayBoard[i][j] = GameView.paint('#dedede', bgColor, " ");

          } else {
            displayBoard[i][j] = GameView.paint('#dedede', Configuration.damageColors.CLEAN, " ");
          }
        }
      }
    }
    return displayBoard;
  }

  private render(s: String[][], o: String[][]): void {
    const n: number = Configuration.boardSize
    console.log(`${this.game.getStriker().getName()}'s Board, ${this.game.getOpponent().getName()}'s Board`)
    for (let i = 0; i <= n; i++) {
      let line: string = "";

      for (let j = 0; j <= n; j++) {
        line += s[i][j];
      }

      for (let j = 0; j <= n; j++) {
        line += o[i][j];
      }
      console.log(line);
    }
  }

  public drawBoard(): void {
    const striker = this.game.currentPlayer;
    const observer = Game.getRivalIdentifier(this.game.currentPlayer);
    const s = this.game.boards.get(striker);
    const o = this.game.boards.get(observer);

    this.render(this.buildUI(s, striker), this.buildUI(o, observer));
  }
}

export {GameView}
