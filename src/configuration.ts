import {HorizontalAssignment} from "./Type/Board/FleetAssignment/HorizontalAssignment";
import {ShipTypes} from "./Enum";

const Configuration = {
  boardSize: 2,
  fleetAssignmentStrategy: new HorizontalAssignment(),
  shipsLength: {
    [ShipTypes.BATTLESHIP]: 1,
    [ShipTypes.CRUISER]: 1,
    [ShipTypes.SUBMARINE]: 3,
    [ShipTypes.CARRIER]: 5,
    [ShipTypes.DESTROYER]: 2,
  }
}

export {Configuration}
