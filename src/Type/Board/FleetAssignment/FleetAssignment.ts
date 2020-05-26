import {IFleetAssignmentStrategy} from "./IFleetAssignmentStrategy";
import {Ship} from "../../SeaEntity/Ship";
import {Cruiser} from "../../SeaEntity/Cruiser";
import {Configuration} from "../../../configuration";
import {SeaEntityIdentifier} from "../../../Enum";
import {Battleship} from "../../SeaEntity/Battleship";
import {Destroyer} from "../../SeaEntity/Destroyer";
import {Carrier} from "../../SeaEntity/Carrier";
import {Submarine} from "../../SeaEntity/Submarine";

abstract class FleetAssignment implements IFleetAssignmentStrategy {

  abstract getBlocks(l: number): string[];

  protected resetCache(): void {}

  execute(): Ship[] {
    this.resetCache();
    const response: Ship[] = [];
    response.push(new Cruiser(this.getBlocks(Configuration.shipsLength[SeaEntityIdentifier.CRUISER])));
    response.push(new Battleship(this.getBlocks(Configuration.shipsLength[SeaEntityIdentifier.BATTLESHIP])));
    response.push(new Destroyer(this.getBlocks(Configuration.shipsLength[SeaEntityIdentifier.DESTROYER])));
    response.push(new Carrier(this.getBlocks(Configuration.shipsLength[SeaEntityIdentifier.CARRIER])));
    response.push(new Submarine(this.getBlocks(Configuration.shipsLength[SeaEntityIdentifier.SUBMARINE])));
    return response;
  }
}

export {FleetAssignment}
