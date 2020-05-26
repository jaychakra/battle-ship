"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Surface_1 = require("./Surface");
const Water_1 = require("../SeaEntity/Water");
const configuration_1 = require("../../configuration");
const Enum_1 = require("../../Enum");
let Board = /** @class */ (() => {
    class Board {
        constructor() {
            this.coordinates = new Map();
            this.fleet = configuration_1.Configuration.fleetAssignmentStrategy.execute();
            const possibleCoordinates = Board.generateCoordinate(configuration_1.Configuration.boardSize);
            possibleCoordinates.forEach(block => {
                this.coordinates.set(block, new Surface_1.Surface(new Water_1.Water()));
            });
            for (let s of this.fleet) {
                for (let block of s.getBlocks()) {
                    this.coordinates.set(block, new Surface_1.Surface(s));
                }
            }
        }
        getHealth(block) {
            if (!this.coordinates.has(block))
                throw new Error("Invalid Block on board");
            // @ts-ignore
            return this.coordinates.get(block).getHealth();
        }
        assessImpact(s, coordinate) {
            const impact = coordinate.entity.assessStrikeImpact(this);
            s.addImpact(impact);
        }
        changeSurfaceState(s) {
            for (let block of s.destination) {
                const coordinate = this.coordinates.get(block);
                if (!!coordinate) {
                    coordinate.setHealthTo(0);
                    this.assessImpact(s, coordinate);
                }
            }
            // TODO: Can be corrected by changing inherent data structure from array to Map
            let deadShips = 0;
            for (let ship of this.fleet) {
                deadShips += ship.getSeaEntityStatus() == Enum_1.SeaEntityStatus.DESTROYED ? 1 : 0;
            }
            if (deadShips == this.fleet.length)
                s.addImpact(Enum_1.Impact.OPPONENT_DESTROYED);
        }
        getSurface(block) {
            // @ts-ignore
            return this.coordinates.get(block);
        }
    }
    Board.generateCoordinate = (n) => {
        const response = [];
        for (let i = 0; i < n; i++) {
            let row = String.fromCharCode(65 + i);
            for (let j = 1; j <= n; j++) {
                response.push(`${row}${j}`);
            }
        }
        return response;
    };
    return Board;
})();
exports.Board = Board;
//# sourceMappingURL=Board.js.map