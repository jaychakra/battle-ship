"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
class Surface {
    constructor(entity) {
        this.health = 100;
        this.entity = entity;
    }
    setHealthTo(health) {
        this.health = health;
    }
    getHealth() {
        return this.health;
    }
}
exports.Surface = Surface;
//# sourceMappingURL=Surface.js.map