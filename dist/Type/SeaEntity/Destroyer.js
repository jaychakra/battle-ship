"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destroyer = void 0;
const Ship_1 = require("./Ship");
const Enum_1 = require("../../Enum");
class Destroyer extends Ship_1.Ship {
    constructor(blocks) {
        super(blocks);
        this.id = Enum_1.SeaEntityIdentifier.DESTROYER;
    }
}
exports.Destroyer = Destroyer;
//# sourceMappingURL=Destroyer.js.map