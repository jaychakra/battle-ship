import {HorizontalAssignment} from "./Type/Board/FleetAssignment/HorizontalAssignment";
import {SeaEntityIdentifier, ShipTypes} from "./Enum";

const Configuration = {
  boardSize: 2,
  fleetAssignmentStrategy: new HorizontalAssignment(),
  shipsLength: {
    [ShipTypes.BATTLESHIP]: 1,
    [ShipTypes.CRUISER]: 1,
    [ShipTypes.SUBMARINE]: 3,
    [ShipTypes.CARRIER]: 5,
    [ShipTypes.DESTROYER]: 2,
  },
  seaEntityColors: {
    [SeaEntityIdentifier.WATER]: "#00cbff",
    [ShipTypes.CRUISER]: "#f7ff00",
    [ShipTypes.SUBMARINE]: "#497f61",
    [ShipTypes.CARRIER]: "#6069cd",
    [ShipTypes.DESTROYER]: "#a661bf",
  },
  damageColors: {
    CLEAN: "#00cbff",
    DESTROYED: "#000000"
  }
}

export {Configuration}
