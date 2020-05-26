"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battleship = void 0;
const Ship_1 = require("./Ship");
const Enum_1 = require("../../Enum");
class Battleship extends Ship_1.Ship {
    constructor(blocks) {
        super(blocks);
        this.id = Enum_1.SeaEntityIdentifier.BATTLESHIP;
    }
}
exports.Battleship = Battleship;
//# sourceMappingURL=Battleship.js.map