"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ran = void 0;
const Enum_1 = require("../../../Enum");
const Battleship_1 = require("../../SeaEntity/Battleship");
const configuration_1 = require("../../../configuration");
const Cruiser_1 = require("../../SeaEntity/Cruiser");
const Submarine_1 = require("../../SeaEntity/Submarine");
const Carrier_1 = require("../../SeaEntity/Carrier");
const Destroyer_1 = require("../../SeaEntity/Destroyer");
class Ran {
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
        response.push(new Cruiser_1.Cruiser(Ran.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.CRUISER])));
        response.push(new Battleship_1.Battleship(Ran.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.BATTLESHIP])));
        response.push(new Destroyer_1.Destroyer(Ran.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.DESTROYER])));
        response.push(new Carrier_1.Carrier(Ran.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.CARRIER])));
        response.push(new Submarine_1.Submarine(Ran.getBlocks(row++, configuration_1.Configuration.shipsLength[Enum_1.SeaEntityIdentifier.SUBMARINE])));
        return response;
    }
}
exports.Ran = Ran;
//# sourceMappingURL=RandomAssignment.js.map