"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDataStore = void 0;
const Repo_1 = require("./Repo");
let PlayerDataStore = /** @class */ (() => {
    class PlayerDataStore extends Repo_1.MapDataStore {
        constructor() {
            super();
            this.store = new Map();
        }
        static getInstance() {
            return PlayerDataStore.instance;
        }
    }
    PlayerDataStore.instance = new PlayerDataStore();
    return PlayerDataStore;
})();
exports.PlayerDataStore = PlayerDataStore;
//# sourceMappingURL=PlayerDataStore.js.map