"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cruiser = void 0;
const Ship_1 = require("./Ship");
const Enum_1 = require("../../Enum");
class Cruiser extends Ship_1.Ship {
    constructor(blocks) {
        super(blocks);
        this.id = Enum_1.SeaEntityIdentifier.CRUISER;
    }
}
exports.Cruiser = Cruiser;
//# sourceMappingURL=Cruiser.js.map