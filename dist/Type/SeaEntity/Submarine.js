"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submarine = void 0;
const Ship_1 = require("./Ship");
const Enum_1 = require("../../Enum");
class Submarine extends Ship_1.Ship {
    constructor(blocks) {
        super(blocks);
        this.id = Enum_1.SeaEntityIdentifier.SUBMARINE;
    }
}
exports.Submarine = Submarine;
//# sourceMappingURL=Submarine.js.map