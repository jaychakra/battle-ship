"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaEntityIdentifier = exports.Impact = exports.ShipTypes = exports.SurfaceType = exports.PlayerIdentifier = exports.SeaEntityStatus = exports.GameStateIdentifier = exports.GameMode = void 0;
var GameMode;
(function (GameMode) {
    GameMode[GameMode["COMPUTER"] = 0] = "COMPUTER";
    GameMode[GameMode["TWO_PLAYER"] = 1] = "TWO_PLAYER";
})(GameMode || (GameMode = {}));
exports.GameMode = GameMode;
var SeaEntityStatus;
(function (SeaEntityStatus) {
    SeaEntityStatus[SeaEntityStatus["CLEAN"] = 0] = "CLEAN";
    SeaEntityStatus[SeaEntityStatus["DIRTY"] = 1] = "DIRTY";
    SeaEntityStatus[SeaEntityStatus["DESTROYED"] = 2] = "DESTROYED";
})(SeaEntityStatus || (SeaEntityStatus = {}));
exports.SeaEntityStatus = SeaEntityStatus;
var PlayerIdentifier;
(function (PlayerIdentifier) {
    PlayerIdentifier[PlayerIdentifier["FIRST"] = 0] = "FIRST";
    PlayerIdentifier[PlayerIdentifier["SECOND"] = 1] = "SECOND";
})(PlayerIdentifier || (PlayerIdentifier = {}));
exports.PlayerIdentifier = PlayerIdentifier;
var SurfaceType;
(function (SurfaceType) {
    SurfaceType[SurfaceType["WATER"] = 0] = "WATER";
    SurfaceType[SurfaceType["SHIP"] = 1] = "SHIP";
})(SurfaceType || (SurfaceType = {}));
exports.SurfaceType = SurfaceType;
var ShipTypes;
(function (ShipTypes) {
    ShipTypes[ShipTypes["DESTROYER"] = 0] = "DESTROYER";
    ShipTypes[ShipTypes["CARRIER"] = 1] = "CARRIER";
    ShipTypes[ShipTypes["SUBMARINE"] = 2] = "SUBMARINE";
    ShipTypes[ShipTypes["CRUISER"] = 3] = "CRUISER";
    ShipTypes[ShipTypes["BATTLESHIP"] = 4] = "BATTLESHIP";
})(ShipTypes || (ShipTypes = {}));
exports.ShipTypes = ShipTypes;
var Impact;
(function (Impact) {
    Impact[Impact["WATER_SPLASHED"] = 0] = "WATER_SPLASHED";
    Impact[Impact["SHIP_WEAKENED"] = 1] = "SHIP_WEAKENED";
    Impact[Impact["SHIP_DESTROYED"] = 2] = "SHIP_DESTROYED";
    Impact[Impact["OPPONENT_DESTROYED"] = 3] = "OPPONENT_DESTROYED";
})(Impact || (Impact = {}));
exports.Impact = Impact;
var GameStateIdentifier;
(function (GameStateIdentifier) {
    GameStateIdentifier[GameStateIdentifier["INITIALIZING"] = 0] = "INITIALIZING";
    GameStateIdentifier[GameStateIdentifier["RUNNING"] = 1] = "RUNNING";
    GameStateIdentifier[GameStateIdentifier["COMPLETED"] = 2] = "COMPLETED";
})(GameStateIdentifier || (GameStateIdentifier = {}));
exports.GameStateIdentifier = GameStateIdentifier;
var SeaEntityIdentifier;
(function (SeaEntityIdentifier) {
    SeaEntityIdentifier[SeaEntityIdentifier["WATER"] = 0] = "WATER";
    SeaEntityIdentifier[SeaEntityIdentifier["DESTROYER"] = 1] = "DESTROYER";
    SeaEntityIdentifier[SeaEntityIdentifier["CARRIER"] = 2] = "CARRIER";
    SeaEntityIdentifier[SeaEntityIdentifier["BATTLESHIP"] = 3] = "BATTLESHIP";
    SeaEntityIdentifier[SeaEntityIdentifier["CRUISER"] = 4] = "CRUISER";
    SeaEntityIdentifier[SeaEntityIdentifier["SUBMARINE"] = 5] = "SUBMARINE";
})(SeaEntityIdentifier || (SeaEntityIdentifier = {}));
exports.SeaEntityIdentifier = SeaEntityIdentifier;
//# sourceMappingURL=Enum.js.map