import {Game} from "./Game";
import {Configuration} from "../../configuration";
import {Board} from "../Board/Board";
import {Surface} from "../Board/Surface";


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

  private buildUI(board: Board): String[][] {
    const n: number = Configuration.boardSize
    const displayBoard: String[][] = [[]];
    displayBoard[0] = Array(Configuration.boardSize + 1);
    displayBoard[0][0] = "+";
    for (let i = 1; i <= Configuration.boardSize; i++) displayBoard[0][i] = `${i}`;

    // console.log(this.blockMap);
    for (let i = 1; i <= n; i++) {
      displayBoard[i] = Array(Configuration.boardSize + 1);
      let line = "";
      displayBoard[i][0] = String.fromCharCode(64 + i);
      for (let j = 1; j <= n; j++) {
        const block: String = this.blockMap[i][j];
        const surface: Surface = board.getSurface(block);
        if (surface.getHealth() == 0) {
          displayBoard[i][j] = "X";
        } else {
          displayBoard[i][j] = " ";
        }
      }
    }
    return displayBoard;
  }

  private render(s: Board, o: Board): void {
    const n: number = Configuration.boardSize
    console.log(`${this.game.getStriker().getName()}'s Board, ${this.game.getOpponent().getName()}'s Board`)
    for (let i = 0; i <= n; i++) {
      let line: String = "|";

      for (let j = 0; j <= n; j++) {
        // @ts-ignore
        line += `${s[i][j]} `;
      }
      line += "|";

      for (let j = 0; j <= n; j++) {
        // @ts-ignore
        line += `${o[i][j]} `;
      }
      line += "|";
      console.log(line);
    }
  }

  public drawBoard(): void {
    const s = this.game.boards.get(this.game.currentPlayer);
    const o = this.game.boards.get(Game.getRivalIdentifier(this.game.currentPlayer));

    // @ts-ignore
    this.render(this.buildUI(s), this.buildUI(o));
  }
}

export {GameView}
