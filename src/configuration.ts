import {HorizontalAssignment} from "./Type/Board/FleetAssignment/HorizontalAssignment";
import {GameMode, SeaEntityIdentifier} from "./Enum";
import {DoorGun} from "./Type/WarHead/DestructionStrategy/DoorGun";
import {Missile} from "./Type/WarHead/DestructionStrategy/Missile";

const Configuration = {
  boardSize: 9,
  fleetAssignmentStrategy: new HorizontalAssignment(),
  destructionStrategy: new Missile(),
  gameController: GameMode.COMPUTER,
  shipsLength: {
    [SeaEntityIdentifier.BATTLESHIP]: 4,
    [SeaEntityIdentifier.CRUISER]: 3,
    [SeaEntityIdentifier.SUBMARINE]: 3,
    [SeaEntityIdentifier.CARRIER]: 5,
    [SeaEntityIdentifier.DESTROYER]: 2,
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
    DESTROYED_WATER: "#CCCCCC",
    DESTROYED_SHIP: "#000000"
  },
  boardHeader: {
    fgColor: "#000000",
    bgColor: "#FFFFFF"
  }
}

export {Configuration}
