"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapDataStore = void 0;
class MapDataStore {
    get(key) {
        if (!this.has(key))
            throw new Error(`Key ${key} not present in store`);
        return this.store.get(key);
    }
    has(key) {
        return this.store.has(key);
    }
    add(key, value) {
        if (this.has(key))
            throw new Error(`Key ${key} already present in store`);
        this.store.set(key, value);
        return this.store.has(key);
    }
    update(key, value) {
        throw new Error("Not Implemented");
    }
}
exports.MapDataStore = MapDataStore;
//# sourceMappingURL=Repo.js.map