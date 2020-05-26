"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrier = void 0;
const Ship_1 = require("./Ship");
const Enum_1 = require("../../Enum");
class Carrier extends Ship_1.Ship {
    constructor(blocks) {
        super(blocks);
        this.id = Enum_1.SeaEntityIdentifier.CARRIER;
    }
}
exports.Carrier = Carrier;
//# sourceMappingURL=Carrier.js.map