import {GameStateIdentifier, PlayerIdentifier} from "../../Enum";
import {GameState} from "./GameState/GameState";
import {Player} from "../Player";
import {Strike} from "../WarHead/Strike";
import {Initializing} from "./GameState/Initializing";
import {GameView} from "./GameView";
import {Board} from "../Board/Board";

class Game {
  private gameState: GameState;
  currentPlayer: PlayerIdentifier;
  gameView: GameView;
  private winner: PlayerIdentifier;
  readonly players: Map<PlayerIdentifier, Player>;
  readonly boards: Map<PlayerIdentifier, Board>;

  constructor() {
    this.gameState = new Initializing(this);
    this.gameView = new GameView(this);
    this.players = new Map<PlayerIdentifier, Player>();
    this.boards = new Map<PlayerIdentifier, Board>();
    this.currentPlayer = PlayerIdentifier.FIRST;
  }

  public static getRivalIdentifier(id: PlayerIdentifier): PlayerIdentifier {
    return id == PlayerIdentifier.FIRST ? PlayerIdentifier.SECOND : PlayerIdentifier.FIRST;
  }

  public changeState(state: GameState): void {
    this.gameState = state;
  }

  public changePlayersTurn(): void {
    this.currentPlayer = Game.getRivalIdentifier(this.currentPlayer);
  }

  public addPlayer(player: Player, board: Board): void {
    this.gameState.addPlayer(player, board);
  }

  public attack(strike: Strike): void {
    this.gameState.attack(strike);
  }

  public render(): void {
    this.gameState.render();
  }

  public getStriker(): any {
    return this.players.get(this.currentPlayer);
  }

  public getOpponent(): any {
    const opponent: PlayerIdentifier = Game.getRivalIdentifier(this.currentPlayer);
    return this.players.get(opponent);
  }

  public getGameState(): GameStateIdentifier {
    return this.gameState.getName();
  }

  public getWinner(): PlayerIdentifier {
    return this.winner;
  }

  public setWinner(winner: PlayerIdentifier): void {
    if (!!this.winner) throw new Error("Game already has a winner");
    this.winner = winner;
  }

  public getPlayer(id: PlayerIdentifier): Player {
    // @ts-ignore
    return this.players.get(id);
  }
}

export {Game}
