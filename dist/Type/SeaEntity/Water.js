"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = void 0;
const Enum_1 = require("../../Enum");
class Water {
    constructor() {
        this.id = Enum_1.SeaEntityIdentifier.WATER;
    }
    getSeaEntityStatus() {
        return this.status;
    }
    assessStrikeImpact(board) {
        this.status = Enum_1.SeaEntityStatus.DESTROYED;
        return Enum_1.Impact.WATER_SPLASHED;
    }
    getSeaEntityIdentifier() {
        return this.id;
    }
}
exports.Water = Water;
//# sourceMappingURL=Water.js.map