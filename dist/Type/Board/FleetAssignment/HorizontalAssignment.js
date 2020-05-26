"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalAssignment = void 0;
const FleetAssignment_1 = require("./FleetAssignment");
const configuration_1 = require("../../../configuration");
class HorizontalAssignment extends FleetAssignment_1.FleetAssignment {
    constructor() {
        super();
        this.rowsUsed = new Set();
    }
    resetCache() {
        this.rowsUsed = new Set();
    }
    getBlocks(l) {
        let row = Math.floor(Math.random() * configuration_1.Configuration.boardSize);
        while (this.rowsUsed.has(row)) {
            row = Math.floor(Math.random() * configuration_1.Configuration.boardSize);
        }
        this.rowsUsed.add(row);
        const response = [];
        const startColumn = Math.floor(Math.random() * (configuration_1.Configuration.boardSize - l));
        for (let i = startColumn; i < startColumn + l; i++) {
            const rowId = String.fromCharCode(65 + row);
            response.push(`${rowId}${i}`);
        }
        return response;
    }
}
exports.HorizontalAssignment = HorizontalAssignment;
//# sourceMappingURL=HorizontalAssignment.js.map