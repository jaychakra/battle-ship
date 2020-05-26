import {HorizontalAssignment} from "./Type/Board/FleetAssignment/HorizontalAssignment";
import {SeaEntityIdentifier, ShipTypes} from "./Enum";

const Configuration = {
  boardSize: 9,
  fleetAssignmentStrategy: new HorizontalAssignment(),
  shipsLength: {
    [ShipTypes.BATTLESHIP]: 4,
    [ShipTypes.CRUISER]: 3,
    [ShipTypes.SUBMARINE]: 3,
    [ShipTypes.CARRIER]: 5,
    [ShipTypes.DESTROYER]: 2,
  },
  seaEntityColors: {
    [SeaEntityIdentifier.CRUISER]: "#f7ff00",
    [SeaEntityIdentifier.BATTLESHIP]: "#ff0084",
    [SeaEntityIdentifier.SUBMARINE]: "#497f61",
    [SeaEntityIdentifier.WATER]: "#00cbff",
    [SeaEntityIdentifier.CARRIER]: "#6069cd",
    [SeaEntityIdentifier.DESTROYER]: "#a661bf",
  },
  damageColors: {
    CLEAN: "#00cbff",
    DESTROYED: "#000000"
  },
  boardHeader: {
    fgColor: "#000000",
    bgColor: "#FFFFFF"
  }
}

export {Configuration}
