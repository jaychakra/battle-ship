"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
const Enum_1 = require("../../Enum");
const configuration_1 = require("../../configuration");
class Ship {
    constructor(blocks) {
        this.status = Enum_1.SeaEntityStatus.CLEAN;
        this.blocks = blocks;
    }
    getBlocks() {
        return this.blocks;
    }
    getSeaEntityStatus() {
        return this.status;
    }
    assessStrikeImpact(board) {
        let response = Enum_1.Impact.SHIP_WEAKENED;
        let blocksDestroyed = 0;
        for (let block of this.blocks) {
            blocksDestroyed += board.getHealth(block) == 0 ? 1 : 0;
        }
        if (blocksDestroyed == this.blocks.length) {
            this.status = Enum_1.SeaEntityStatus.DESTROYED;
            response = Enum_1.Impact.SHIP_DESTROYED;
        }
        return response;
    }
    getSeaEntityIdentifier() {
        return this.id;
    }
    getActiveColor() {
        return configuration_1.Configuration.seaEntityColors[this.id];
    }
    getDestroyedColor() {
        return configuration_1.Configuration.damageColors.DESTROYED_SHIP;
    }
    ;
}
exports.Ship = Ship;
//# sourceMappingURL=Ship.js.map