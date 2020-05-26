import {Surface} from "./Surface";
import {Water} from "../SeaEntity/Water";
import {Ship} from "../SeaEntity/Ship";
import {Configuration} from "../../configuration";
import {Strike} from "../WarHead/Strike";
import {Impact, SeaEntityStatus} from "../../Enum";

class Board {
  private coordinates: Map<String, Surface>;
  fleet: Ship[];

  constructor() {
    this.coordinates = new Map<String, Surface>();
    this.fleet = Configuration.fleetAssignmentStrategy.execute();
    const possibleCoordinates = Board.generateCoordinate(Configuration.boardSize);

    possibleCoordinates.forEach(block => {
      this.coordinates.set(block, new Surface(new Water()));
    })

    for (let s of this.fleet) {
      for (let block of s.getBlocks()) {
        this.coordinates.set(block, new Surface(s));
      }
    }
  }

  private static generateCoordinate = (n: number) => {
    const response = [];
    for (let i = 0; i < n; i++) {
      let row = String.fromCharCode(65 + i);
      for (let j = 1; j <= n; j++) {
        response.push(`${row}${j}`);
      }
    }
    return response;
  }

  public getHealth(block: String): number {
    if(!this.coordinates.has(block))throw new Error("Invalid Block on board");

    // @ts-ignore
    return this.coordinates.get(block).getHealth();
  }

  private assessImpact(s: Strike, coordinate: Surface): void {
    const impact: Impact = coordinate.entity.assessStrikeImpact(this);
    s.addImpact(impact);
  }

  public changeSurfaceState(s: Strike): void {
    for (let block of s.destination) {
      const coordinate = this.coordinates.get(block);
      if (!!coordinate) {
        coordinate.setHealthTo(0);
        this.assessImpact(s, coordinate);
      }
    }

    // TODO: Can be corrected by changing inherent data structure from array to Map
    let deadShips = 0;
    for(let ship of this.fleet) {
      deadShips += ship.getSeaEntityStatus() == SeaEntityStatus.DESTROYED ? 1 : 0;
    }

    if (deadShips == this.fleet.length) s.addImpact(Impact.OPPONENT_DESTROYED);
  }

  public getSurface(block: String): Surface {
    // @ts-ignore
    return this.coordinates.get(block);
  }
}

export {Board}
