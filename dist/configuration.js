"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const HorizontalAssignment_1 = require("./Type/Board/FleetAssignment/HorizontalAssignment");
const Enum_1 = require("./Enum");
const Missile_1 = require("./Type/WarHead/DestructionStrategy/Missile");
const Configuration = {
    boardSize: 9,
    fleetAssignmentStrategy: new HorizontalAssignment_1.HorizontalAssignment(),
    destructionStrategy: new Missile_1.Missile(),
    gameController: Enum_1.GameMode.COMPUTER,
    shipsLength: {
        [Enum_1.SeaEntityIdentifier.BATTLESHIP]: 4,
        [Enum_1.SeaEntityIdentifier.CRUISER]: 3,
        [Enum_1.SeaEntityIdentifier.SUBMARINE]: 3,
        [Enum_1.SeaEntityIdentifier.CARRIER]: 5,
        [Enum_1.SeaEntityIdentifier.DESTROYER]: 2,
    },
    seaEntityColors: {
        [Enum_1.SeaEntityIdentifier.CRUISER]: "#f7ff00",
        [Enum_1.SeaEntityIdentifier.BATTLESHIP]: "#ff0084",
        [Enum_1.SeaEntityIdentifier.SUBMARINE]: "#497f61",
        [Enum_1.SeaEntityIdentifier.WATER]: "#00cbff",
        [Enum_1.SeaEntityIdentifier.CARRIER]: "#6069cd",
        [Enum_1.SeaEntityIdentifier.DESTROYER]: "#a661bf",
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
};
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map