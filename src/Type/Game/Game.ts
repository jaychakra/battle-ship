import {GameMode, GameStateIdentifier, PlayerIdentifier} from "../../Enum";
import {GameState} from "./GameState/GameState";
import {Player} from "../Player";
import {Strike} from "../Strike";
import {Initializing} from "./GameState/Initializing";
import {GameView} from "./GameView";
import {Board} from "../Board/Board";

class Game {
  private gameMode: GameMode;
  private gameState: GameState;
  currentPlayer: PlayerIdentifier;
  gameView: GameView;
  winner: PlayerIdentifier;
  readonly players: Map<PlayerIdentifier, Player>;
  readonly boards: Map<PlayerIdentifier, Board>;

  constructor(gameMode: GameMode) {
    this.gameMode = gameMode;
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

  public addPlayer(player: Player): void {
    this.gameState.addPlayer(player);
  }

  public attack(strike: Strike): void {
    this.gameState.attack(strike);
  }

  public render(player: Player): void {
    this.gameState.render(player);
  }

  public getStriker(): any {
    return this.players.get(this.currentPlayer);
  }

  public getOpponent(): any {
    const opponent: PlayerIdentifier = Game.getRivalIdentifier(this.currentPlayer);
    return this.players.get(opponent);
  }

  public getGameState () : GameStateIdentifier {
    return this.gameState.getName();
  }

}

export {Game}
