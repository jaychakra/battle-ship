"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaEntityIdentifier = exports.Impact = exports.PlayerIdentifier = exports.SeaEntityStatus = exports.GameStateIdentifier = exports.GameMode = void 0;
var GameMode;
(function (GameMode) {
    GameMode[GameMode["COMPUTER"] = 0] = "COMPUTER";
    GameMode[GameMode["TWO_PLAYER"] = 1] = "TWO_PLAYER";
})(GameMode || (GameMode = {}));
exports.GameMode = GameMode;
var SeaEntityStatus;
(function (SeaEntityStatus) {
    SeaEntityStatus[SeaEntityStatus["CLEAN"] = 0] = "CLEAN";
    SeaEntityStatus[SeaEntityStatus["DESTROYED"] = 1] = "DESTROYED";
})(SeaEntityStatus || (SeaEntityStatus = {}));
exports.SeaEntityStatus = SeaEntityStatus;
var PlayerIdentifier;
(function (PlayerIdentifier) {
    PlayerIdentifier[PlayerIdentifier["FIRST"] = 0] = "FIRST";
    PlayerIdentifier[PlayerIdentifier["SECOND"] = 1] = "SECOND";
})(PlayerIdentifier || (PlayerIdentifier = {}));
exports.PlayerIdentifier = PlayerIdentifier;
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