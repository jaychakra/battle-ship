import {FleetAssignmentStrategy} from "./FleetAssignmentStrategy";
import {Ship} from "../../SeaEntity/Ship";
import {SeaEntityIdentifier} from "../../../Enum";
import {Battleship} from "../../SeaEntity/Battleship";
import {Configuration} from "../../../configuration";
import {Cruiser} from "../../SeaEntity/Cruiser";
import {Submarine} from "../../SeaEntity/Submarine";
import {Carrier} from "../../SeaEntity/Carrier";
import {Destroyer} from "../../SeaEntity/Destroyer";

class HorizontalAssignment implements FleetAssignmentStrategy {
  private static getBlocks(rowId: number, l: number): String[] {
    let row = String.fromCharCode(65 + rowId);
    const response: String[] = [];
    for (let i = 1; i <= l; i++) {
      response.push(`${row}${i}`);
    }
    return response;
  }

  execute(): Ship[] {
    let row = 0;
    const response: Ship[] = [];
    response.push(new Cruiser(HorizontalAssignment.getBlocks(row++, Configuration.shipsLength[SeaEntityIdentifier.CRUISER])));
    response.push(new Battleship(HorizontalAssignment.getBlocks(row++, Configuration.shipsLength[SeaEntityIdentifier.BATTLESHIP])));
    response.push(new Destroyer(HorizontalAssignment.getBlocks(row++, Configuration.shipsLength[SeaEntityIdentifier.DESTROYER])));
    response.push(new Carrier(HorizontalAssignment.getBlocks(row++, Configuration.shipsLength[SeaEntityIdentifier.CARRIER])));
    response.push(new Submarine(HorizontalAssignment.getBlocks(row++, Configuration.shipsLength[SeaEntityIdentifier.SUBMARINE])));
    return response;
  }
}

export {HorizontalAssignment}
