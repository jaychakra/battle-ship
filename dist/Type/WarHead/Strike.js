"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strike = void 0;
class Strike {
    constructor(blocks) {
        this.destination = blocks;
        this.result = new Set();
    }
    addImpact(i) {
        this.result.add(i);
    }
    hasImpact(i) {
        return this.result.has(i);
    }
}
exports.Strike = Strike;
//# sourceMappingURL=Strike.js.map