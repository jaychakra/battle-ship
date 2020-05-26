"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalAssignment = void 0;
const Enum_1 = require("../../../Enum");
const Battleship_1 = require("../../SeaEntity/Battleship");
const configuration_1 = require("../../../configuration");
const Cruiser_1 = require("../../SeaEntity/Cruiser");
const Submarine_1 = require("../../SeaEntity/Submarine");
const Carrier_1 = require("../../SeaEntity/Carrier");
const Destroyer_1 = require("../../SeaEntity/Destroyer");
class HorizontalAssignment {
    static getBlocks(rowId, l) {
        let row = String.fromCharCode(65 + rowId);
        const response = [];
        for (let i = 1; i <= l; i++) {
            response.push(`${row}${i}`);
        }
        return response;
    }
    execute() {
        let row = 0;
        const response = [];
        response.push(new Cruiser_1.Cruiser(HorizontalAssignment.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.ShipTypes.CRUISER])));
        response.push(new Battleship_1.Battleship(HorizontalAssignment.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.ShipTypes.BATTLESHIP])));
        response.push(new Destroyer_1.Destroyer(HorizontalAssignment.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.ShipTypes.DESTROYER])));
        response.push(new Carrier_1.Carrier(HorizontalAssignment.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.ShipTypes.CARRIER])));
        response.push(new Submarine_1.Submarine(HorizontalAssignment.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.ShipTypes.SUBMARINE])));
        return response;
    }
}
exports.HorizontalAssignment = HorizontalAssignment;
//# sourceMappingURL=HorizontalAssignment.js.map