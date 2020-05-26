"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = void 0;
const Enum_1 = require("../../Enum");
const configuration_1 = require("../../configuration");
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
    getActiveColor() {
        return configuration_1.Configuration.seaEntityColors[this.id];
    }
    getDestroyedColor() {
        return configuration_1.Configuration.damageColors.DESTROYED_WATER;
    }
}
exports.Water = Water;
//# sourceMappingURL=Water.js.map