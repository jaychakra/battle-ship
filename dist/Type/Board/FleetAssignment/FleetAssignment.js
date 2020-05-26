"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAssignment = void 0;
const Cruiser_1 = require("../../SeaEntity/Cruiser");
const configuration_1 = require("../../../configuration");
const Enum_1 = require("../../../Enum");
const Battleship_1 = require("../../SeaEntity/Battleship");
const Destroyer_1 = require("../../SeaEntity/Destroyer");
const Carrier_1 = require("../../SeaEntity/Carrier");
const Submarine_1 = require("../../SeaEntity/Submarine");
class FleetAssignment {
    resetCache() { }
    execute() {
        this.resetCache();
        const response = [];
        response.push(new Cruiser_1.Cruiser(this.getBlocks(configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.CRUISER])));
        response.push(new Battleship_1.Battleship(this.getBlocks(configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.BATTLESHIP])));
        response.push(new Destroyer_1.Destroyer(this.getBlocks(configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.DESTROYER])));
        response.push(new Carrier_1.Carrier(this.getBlocks(configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.CARRIER])));
        response.push(new Submarine_1.Submarine(this.getBlocks(configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.SUBMARINE])));
        return response;
    }
}
exports.FleetAssignment = FleetAssignment;
//# sourceMappingURL=FleetAssignment.js.map